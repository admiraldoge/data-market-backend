import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
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
}

export const UserSchema = SchemaFactory.createForClass(User);
