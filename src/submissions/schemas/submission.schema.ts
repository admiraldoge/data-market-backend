import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import { ImageSchema, imageSchema } from '../../schemas/ImageSchema';
import { StringSchema, stringSchema } from '../../schemas/StringSchema';
import { ArraySchema, arraySchema } from '../../schemas/ArraySchema';

export type SubmissionDocument = Submission & Document;

@Schema({
  timestamps: true,
})
export class Submission {
  @Prop({ type: Object })
  data: Object;

  @Prop()
  url: string;

  @Prop()
  formId: string;

  @Prop()
  collectorId: string;

  @Prop({ default: false })
  submitted: boolean;

  @Prop({ type: Object })
  form: Object;

  @Prop()
  userId: string;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
