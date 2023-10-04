import { Module } from '@nestjs/common';
import { DatabaseModule } from 'tools/database/database.module';
import { savedVideosProviders } from './savedvideo.providers';
import { SavedVideoController } from './savedvideo.controller';
import { SavedVideoService } from './savedvideo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SavedVideoController],
  providers: [
    SavedVideoService,
    ...savedVideosProviders
  ],
})
export class SavedVideoModule { }
