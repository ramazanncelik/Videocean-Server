import { Module } from '@nestjs/common';
import { DatabaseModule } from 'tools/database/database.module';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { commentsProviders } from './comment.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [
    CommentService,
    ...commentsProviders
  ],
})
export class CommentModule { }
