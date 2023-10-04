import { Connection } from 'mongoose';
import { CommentSchema } from 'tools/models/comment.model';
import { CommentDisLikeSchema, CommentLikeSchema } from 'tools/models/comment_like_dislike.model';

export const comment_likes_dislikes_Providers = [
  {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) => connection.model('Comment', CommentSchema),
    inject: ['DATABASE_CONNECTION'],
  }, {
    provide: 'COMMENT_LIKE_MODEL',
    useFactory: (connection: Connection) => connection.model('CommentLike', CommentLikeSchema),
    inject: ['DATABASE_CONNECTION'],
  }, {
    provide: 'COMMENT_DISLIKE_MODEL',
    useFactory: (connection: Connection) => connection.model('CommentDisLike', CommentDisLikeSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];