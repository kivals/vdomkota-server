import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from './entity/content.entity';

@Injectable()
export class ContentService {
  constructor(@InjectModel(Content.name) private readonly contentModel: Model<Content>) {}

  getMainPageContent() {
    return this.contentModel.findOne({ name: 'main' });
  }
}
