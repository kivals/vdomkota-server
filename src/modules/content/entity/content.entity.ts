import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Icon } from '../icon.interface';

@Schema()
export class Content extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  link: string;

  @Prop({ type: String, required: true })
  mainTitle: string;

  @Prop({ type: String, required: true })
  logo: string;

  @Prop({ type: String, required: true })
  videoMp4: string;

  @Prop({ type: String, required: true })
  videoWebm: string;

  @Prop({ type: String, required: true })
  videoImage: string;

  @Prop({ type: String, required: true })
  bankCat: string;

  @Prop({ type: String, required: true })
  bankTitle: string;

  @Prop({ type: String, required: true })
  helpTitle: string;

  @Prop({ type: Array, required: true })
  helpIcons: Icon[];
}

export const ContentSchema = SchemaFactory.createForClass(Content);
