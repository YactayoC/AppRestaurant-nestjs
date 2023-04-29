import { IsBoolean, IsEmail, IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  password: string;

  @IsString()
  @IsOptional()
  @IsIn(['active', 'inactive'])
  state?: string;

  @IsString()
  @IsOptional()
  key?: string;

  @IsBoolean()
  @IsOptional()
  isConfirm?: boolean;
}
