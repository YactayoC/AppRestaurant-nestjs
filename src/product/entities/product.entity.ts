import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Product extends Document {
  @Prop({ required: true, index: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  image: string;

  @Prop({ default: false })
  inOffer: boolean;

  @Prop({ default: 0 })
  offerPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
