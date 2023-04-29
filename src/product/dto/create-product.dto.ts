import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsString()
  category: string;

  @IsString()
  image: string;

  @IsBoolean()
  @IsOptional()
  inOffer?: boolean;

  @IsNumber()
  @Min(0)
  @IsOptional()
  offerPrice?: number;
}
