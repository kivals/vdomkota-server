import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ContentService } from './modules/content/content.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly contentService: ContentService) {}

  @Get()
  @Render('index')
  public async index() {
    console.log({
      page: await this.contentService.getMainPageContent(),
    });
    return {
      page: await this.contentService.getMainPageContent(),
    };
  }

  @Get('/find')
  @Render('find')
  public findPage() {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
