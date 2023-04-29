import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class RegisterDto extends CreateUserDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;
}
