import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  info: string;

  @Prop({ type: String })
  extraInfo: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Photo' }] })
  photos: string[];

  @Prop({ type: Number })
  age: number;

  @Prop({ type: Boolean, default: false })
  hasHome: boolean;

  @Prop({ type: String })
  infections: string;

  @Prop({ type: Boolean })
  isNeutered: boolean;

  @Prop({ type: String })
  vaccinations: string;

  @Prop({ type: Date })
  shelterPutDate: Date;
}

export const CatSchema = SchemaFactory.createForClass(Cat);
