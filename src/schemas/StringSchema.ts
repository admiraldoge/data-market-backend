import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class StringSchema {
  @Prop()
  _template: string;

  @Prop()
  _templateName: string;

  @Prop()
  value: string;
}

export const stringSchema = SchemaFactory.createForClass(StringSchema);
