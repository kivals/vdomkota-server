import { Module } from '@nestjs/common';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat, CatSchema } from './entity/cat.entity';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { imgFileName, imgFilter } from '../../utils/img-update.utils';
import { diskStorage } from 'multer';
import { PhotoModule } from '../photo/photo.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        storage: diskStorage({
          destination: async (req, file, cb) => {
            const path: string = configService.get('UPLOAD_DEST');
            return cb(null, path);
          },
          filename: imgFileName,
        }),
        fileFilter: imgFilter,
        limits: {
          fieldSize: Number(configService.get('MAX_IMG_FILE_SIZE')),
          files: Number(configService.get('MAX_COUNT_FILES')),
        },
      }),
      inject: [ConfigService],
    }),
    PhotoModule,
  ],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
