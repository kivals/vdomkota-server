import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './entity/cat.entity';
import { Model } from 'mongoose';
import { CreateCatDto } from './dto/create-cat.dto';
import { EditCatDto } from './dto/edit-cat.dto';

/**
 * Cat service
 */
@Injectable()
export class CatService {
  constructor(@InjectModel(Cat.name) private readonly catModel: Model<Cat>) {}

  /**
   * Fetches a cat from database
   * @returns {Promise<Cat[]>} queried array of cats
   */
  getAllCats(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  /**
   * Fetches a profile from database by UUID
   * @param {string} id
   * @returns {Promise<Cat>} queried cat data
   */
  async getById(id: string): Promise<Cat> {
    const cat = await this.catModel.findById(id).exec();
    if (!cat) {
      throw new NotFoundException(`The cat with that id = ${id} does not exist in the system. Please try another id`);
    }
    return cat;
  }

  /**
   * Create new cat
   * @param {CreateCatDto} payload
   * @param photos
   * @returns {Promise<Cat>} created cat data
   */
  create(payload: CreateCatDto, photos: string[]): Promise<Cat> {
    const cat = new this.catModel(payload);
    cat.photos = photos;

    return cat.save();
  }

  /**
   * Edit Cat data
   * @param {string} id
   * @param {EditCatDto} payload
   * @returns {Promise<Cat>} mutated cat data
   */
  async edit(id: string, payload: EditCatDto): Promise<Cat> {
    const editedCat = await this.catModel.updateOne({ id }, payload);
    if (editedCat.nModified !== 1) {
      throw new NotFoundException(`The cat with that id = ${id} does not exist in the system. Please try another id`);
    }
    return this.getById(id);
  }
}
