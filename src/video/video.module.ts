import { Module } from '@nestjs/common';
import { videosProviders } from './video.providers';
import { DatabaseModule } from 'tools/database/database.module';
import { VideoController } from './video.controller';
import { VideoService } from './video.service';

@Module({
  imports: [DatabaseModule],
  controllers: [VideoController],
  providers: [
    VideoService,
    ...videosProviders
  ],
})
export class VideoModule {}
