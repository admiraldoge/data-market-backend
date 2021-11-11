import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { ImageSchema, imageSchema } from '../../schemas/ImageSchema';
import { StringSchema, stringSchema } from '../../schemas/StringSchema';
import { ArraySchema, arraySchema } from '../../schemas/ArraySchema';

export type CollectorDocument = Collector & Document;

@Schema({
  timestamps: true,
})
export class Collector {
  @Prop()
  name: string;

  @Prop()
  _creationTimeStamp: string;

  @Prop()
  url: string;

  @Prop()
  formId: string;

  @Prop()
  deadline: string;

  @Prop()
  public: boolean;

  @Prop({ type: Object })
  form: Object;

  @Prop()
  userId: string;
}

export const CollectorSchema = SchemaFactory.createForClass(Collector);
