import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class CatPhoto extends Document {
  @Prop({ type: String, required: true })
  fullSizeUrl: string;

  @Prop({ type: String })
  smallSizeUrl: string;
}

export const CatPhotoSchema = SchemaFactory.createForClass(CatPhoto);
