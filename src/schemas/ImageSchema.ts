import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ImageSchema {
  @Prop()
  _template: string;

  @Prop()
  _templateName: string;

  @Prop()
  src: string;

  @Prop()
  alt: string;

  @Prop()
  mimeType: string;
}

export const imageSchema = SchemaFactory.createForClass(ImageSchema);
