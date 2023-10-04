import { Module } from '@nestjs/common';
import { comment_likes_dislikes_Providers } from './comment_like_dislike.providers';
import { DatabaseModule } from 'tools/database/database.module';
import { CommentLikeDislikeService } from './comment_like_dislike.service';
import { CommentLikeDislikeController } from './comment_like_dislike.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentLikeDislikeController],
  providers: [
    CommentLikeDislikeService,
    ...comment_likes_dislikes_Providers
  ],
})
export class CommentLikeDislikeModule {}
