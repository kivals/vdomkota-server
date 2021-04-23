import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Photo } from './entity/photo.entity';
import { Model } from 'mongoose';

@Injectable()
export class PhotoService {
  constructor(@InjectModel(Photo.name) private photoModel: Model<Photo>) {}

  savePhotos(photos: Photo[]) {
    return this.photoModel.insertMany(photos);
  }
}
