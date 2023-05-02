import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class User extends Document {
  @Prop({ required: true, unique: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isActive: boolean;

  @Prop({ default: () => Date.now() + '-' + Math.random().toString(36).substring(2, 8) })
  key: string;

  @Prop({ default: false })
  isConfirmed: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
