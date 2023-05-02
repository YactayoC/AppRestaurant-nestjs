import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

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
  isActive?: boolean;

  @IsString()
  @IsOptional()
  key?: string;

  @IsBoolean()
  @IsOptional()
  isConfirmed?: boolean;
}
