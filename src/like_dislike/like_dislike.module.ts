import { Module } from '@nestjs/common';
import { likes_dislikes_Providers } from './like_dislike.providers';
import { DatabaseModule } from 'tools/database/database.module';
import { LikeDislikeController } from './like_dislike.controller';
import { LikeDislikeService } from './like_dislike.service';

@Module({
  imports: [DatabaseModule],
  controllers: [LikeDislikeController],
  providers: [
    LikeDislikeService,
    ...likes_dislikes_Providers
  ],
})
export class LikeDislikeModule {}
