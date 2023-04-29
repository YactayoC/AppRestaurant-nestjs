import { IsString, IsNotEmpty, IsOptional, IsArray } from 'class-validator';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';

import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { Product } from 'src/product/entities/product.entity';

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  direction?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  user: Types.ObjectId | CreateUserDto;

  @IsOptional()
  @IsArray()
  @Type(() => Product)
  favoriteProducts?: Product[];
}
