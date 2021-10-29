import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { ImageSchema, imageSchema } from '../../schemas/ImageSchema';
import { StringSchema, stringSchema } from '../../schemas/StringSchema';
import { ArraySchema, arraySchema } from '../../schemas/ArraySchema';

export type FormDocument = Form & Document;

@Schema({
  timestamps: true,
})
export class Form {
  @Prop({ type: stringSchema })
  name: StringSchema;

  @Prop({ type: imageSchema })
  thumbnail: ImageSchema;

  @Prop({ type: arraySchema })
  fields: ArraySchema;

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
