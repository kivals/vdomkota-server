import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './entity/cat.entity';
import { Model } from 'mongoose';

/**
 * Cat service
 */
@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  /**
   * Fetches a cat from database
   * @returns {Promise<Cat[]>} queried array of cats
   */
  getAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }
}
