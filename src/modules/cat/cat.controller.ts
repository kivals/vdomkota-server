import { Body, Controller, Get, Param, Post, Put, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './entity/cat.entity';
import { CreateCatDto } from './dto/create-cat.dto';
import { EditCatDto } from './dto/edit-cat.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { Photo } from '../photo/entity/photo.entity';
import { PhotoService } from '../photo/photo.service';

/**
 * Cat controller
 */
@Controller('api/cats')
export class CatController {
  constructor(private readonly catService: CatService, private readonly photoService: PhotoService) {}

  /**
   * Retrieves all cats
   * @return {Promise<Cat[]>} queried cats
   */
  @Get()
  async getCats(): Promise<Cat[]> {
    return this.catService.getAllCats();
  }

  /**
   * Retrieves cat by id
   * @param id
   * @return {Promise<Cat>} queried cat
   */
  @Get(':id')
  getCatById(@Param('id') id: string): Promise<Cat> {
    return this.catService.getById(id);
  }

  /**
   * Create new Cat
   * @param files
   * @param payload
   * @return {Promise<Cat>} created cat
   */
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async createCat(@UploadedFiles() files, @Body() payload: CreateCatDto): Promise<Cat> {
    const photos: Photo[] = files.map((file: Express.Multer.File) => {
      return {
        path: file.path,
        isDeleted: false,
      };
    });
    const savedPhotos = await this.photoService.savePhotos(photos);
    const photoIds = savedPhotos.map((photo) => photo._id);

    return this.catService.create(payload, photoIds);
  }

  /**
   * Edit cat data
   * @param id
   * @param payload
   * @return {Promise<Cat>} mutated cat
   */
  @Put(':id')
  editCat(@Param('id') id: string, @Body() payload: EditCatDto): Promise<Cat> {
    return this.catService.edit(id, payload);
  }
}
