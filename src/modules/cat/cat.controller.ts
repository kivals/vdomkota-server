import { Controller, Get } from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './entity/cat.entity';

/**
 * Cat controller
 */
@Controller('api/cats')
export class CatController {
  constructor(private readonly catService: CatService) {}

  /**
   * Retrieves all cats
   * @return {Promise<Cat[]>} queried cats
   */
  @Get()
  async getCats(): Promise<Cat[]> {
    return this.catService.getAllCats();
  }
}
