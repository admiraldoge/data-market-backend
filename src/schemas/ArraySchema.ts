import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ArraySchema {
  @Prop()
  _template: string;

  @Prop()
  _templateName: string;

  @Prop()
  _itemTemplates: [];

  @Prop()
  expandable: boolean;

  @Prop()
  items: [];
}

export const arraySchema = SchemaFactory.createForClass(ArraySchema);
