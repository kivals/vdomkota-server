import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoSchema } from './entity/photo.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Photo', schema: PhotoSchema }])],
  providers: [PhotoService],
  exports: [PhotoService],
})
export class PhotoModule {
  constructor() {}
}
