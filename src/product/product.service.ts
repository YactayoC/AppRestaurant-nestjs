import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private readonly productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto) {
    createProductDto.name = createProductDto.name.toLowerCase();

    try {
      await this.productModel.create(createProductDto);
      return { message: 'Product created' };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAll() {
    return await this.productModel.find();
  }

  async findOne(term: string) {
    let product: Product;

    try {
      if (!product && isValidObjectId(term)) {
        product = await this.productModel.findById(term);
      }

      if (!product) {
        product = await this.productModel.findOne({ name: term.toLowerCase().trim() });
      }

      if (!product) {
        throw new NotFoundException(`Product with id or name '${term}' not found`);
      }

      return product;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAllCategories() {
    const products = await this.findAll();
    const categories = [...new Set(products.map((product) => product.category))];
    const productImages = [...new Set(products.map((product) => product.image))];
    const categoriesWithImages = categories.map((category) => ({ category, image: productImages[0] }));
    return categoriesWithImages;
  }

  async update(term: string, updateProductDto: UpdateProductDto) {
    const product = await this.findOne(term);

    if (updateProductDto.name) {
      updateProductDto.name = updateProductDto.name.toLowerCase();
    }

    try {
      await product.updateOne(updateProductDto);
      return { messsage: `Product with term: ${term} updated` };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.productModel.deleteOne({ _id: id });
      if (deletedCount === 0) {
        throw new BadRequestException(`Product with id ${id} does not exist`);
      }

      return { message: `Product with id ${id} deleted` };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
