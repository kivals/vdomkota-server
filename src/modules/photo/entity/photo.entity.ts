import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Photo extends Document {
  @Prop({ type: String, required: true })
  fullSizeUrl: string;

  @Prop({ type: String })
  smallSizeUrl: string;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;
}

export const PhotoSchema = SchemaFactory.createForClass(Photo);
