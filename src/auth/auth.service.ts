import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { LoginDto } from '../common/dto/login.dto';
import { RegisterDto } from '../common/dto/register.dto';
import { UserService } from 'src/user/user.service';
import { ClientService } from 'src/client/client.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly clientService: ClientService) {}

  async registerClient(registerDto: RegisterDto) {
    const hassedPassword = await bcrypt.hash(registerDto.password, 10);

    try {
      const existingUser = await this.userService.findOne(registerDto.email);
      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      const createdUser = await this.userService.create({ ...registerDto, password: hassedPassword });
      await this.clientService.create({
        user: createdUser._id,
        fullname: registerDto.fullname,
      });

      return { createdUser, message: 'User created successfully, please check your email' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async loginClient(loginDto: LoginDto) {
    try {
      const user = await this.userService.findOne(loginDto.email);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      const client = await this.clientService.findOne(user._id);
      if (!client) {
        throw new NotFoundException('Client not found');
      }

      if (user.state === 'inactive' || user.isConfirm === false) {
        throw new UnauthorizedException('User is inactive or not confirmed, please check your email');
      }

      if ((await this.comparePassword(loginDto.password, user.password)) === false) {
        throw new UnauthorizedException('Invalid credentials');
      }

      return { client };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  //TODO: agregar para confirmar cuenta y olvide contraseña

  private async comparePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compareSync(password, hash);
  }
}
