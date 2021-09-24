import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import {privacitySchema} from '../../schemas/publicSchemas';

export type FormDocument = Form & Document;

@Schema()
export class Form {
  @Prop()
  name: string;

  @Prop()
  creationTimeStamp: string;

  @Prop()
  lastUpdateTimeStamp: string;

  @Prop()
  thumbnail: string;

  @Prop()
  fields: [];

  @Prop()
  tags: [];

  @Prop()
  creatorId: string;

  @Prop()
  deadlineTimeStamp: string;

  @Prop()
  isCompleted: boolean;
}

export const FormSchema = SchemaFactory.createForClass(Form);
