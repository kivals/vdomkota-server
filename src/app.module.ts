import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule],
})
export class AppModule {}
