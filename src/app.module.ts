import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';
import { WinstonModule } from './modules/winston/winston.module';

@Module({
  imports: [ConfigModule, WinstonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
