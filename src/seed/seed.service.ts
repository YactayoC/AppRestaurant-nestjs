import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/product/entities/product.entity';
import { products } from './data/products';

@Injectable()
export class SeedService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async runSeedProducts() {
    await this.productModel.deleteMany({});
    await this.productModel.insertMany(products);
    return 'Products seeded successfully';
  }
}
