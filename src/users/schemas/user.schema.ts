import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  birthday: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop()
  ci: string;

  @Prop()
  permissions: [{ name: string; value: boolean }];

  @Prop()
  companyId: Types.ObjectId;

  @Prop({ default: 'USER' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
