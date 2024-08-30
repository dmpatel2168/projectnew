import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from './entity/note';

@Module({
  imports: [TypeOrmModule.forFeature([Note]),DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
