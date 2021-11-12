import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class NumberSchema {
  @Prop()
  _template: string;

  @Prop()
  _templateName: string;

  @Prop()
  value: number;
}

export const numberSchema = SchemaFactory.createForClass(NumberSchema);
