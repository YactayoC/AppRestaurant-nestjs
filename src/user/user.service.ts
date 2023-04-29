import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterDto } from 'src/common/dto/register.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async create(registerDto: RegisterDto) {
    try {
      const user = await this.userModel.create(registerDto);
      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return this.userModel.find();
  }

  async findOne(term: string) {
    let user: User;

    try {
      if (!user && isValidObjectId(term)) {
        user = await this.userModel.findById(term);
      }

      if (!user) {
        user = await this.userModel.findOne({ email: term.trim() });
      }

      if (!user) {
        throw new NotFoundException(`User with term '${term}' not found`);
      }

      return user;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(term: string, updateUserDto: UpdateUserDto) {
    try {
      const user = await this.findOne(term);

      if (user.state === 'inactive') {
        throw new NotFoundException(`User with email '${updateUserDto.email}' is inactive`);
      }

      return { messsage: `User with term: ${term} updated` };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    const user = await this.findOne(id);

    try {
      if (user.state === 'active') {
        await user.updateOne({ state: 'inactive' });
      }

      return { messsage: `The user is disabled` };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
