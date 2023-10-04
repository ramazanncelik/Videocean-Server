import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from 'tools/database/database.module';
import { TokenMiddleware } from 'libs/middlewares/token.middleware';
import { VideoModule } from './video/video.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { LikeDislikeModule } from './like_dislike/like_dislike.module';
import { CommentModule } from './comment/comment.module';
import { CommentLikeDislikeModule } from './comment_like_dislike/comment_like_dislike.module';
import { SavedVideoModule } from './savedvideo/savedvideo.module';
import { ComplaintModule } from './complaint/complaint.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModule, VideoModule, SubscriptionModule, LikeDislikeModule, CommentModule, CommentLikeDislikeModule, SavedVideoModule, ComplaintModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
