import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';

@Schema({ timestamps: true, versionKey: false })
export class Client {
  @Prop({ required: true })
  fullname: string;

  @Prop({ default: null })
  direction: string;

  @Prop({ default: null })
  phone: string;

  @Prop({ default: null })
  profile: string;

  @Prop({ required: true, type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Product' }] })
  favoriteProducts: Product[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
