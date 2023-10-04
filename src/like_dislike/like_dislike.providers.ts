import { Connection } from 'mongoose';
import { DisLikeSchema, LikeSchema } from 'tools/models/like_dislike.model';
import { VideoSchema } from 'tools/models/video.model';

export const likes_dislikes_Providers = [
  {
    provide: 'VIDEO_MODEL',
    useFactory: (connection: Connection) => connection.model('Video', VideoSchema),
    inject: ['DATABASE_CONNECTION'],
  }, {
    provide: 'LIKE_MODEL',
    useFactory: (connection: Connection) => connection.model('Like', LikeSchema),
    inject: ['DATABASE_CONNECTION'],
  }, {
    provide: 'DISLIKE_MODEL',
    useFactory: (connection: Connection) => connection.model('DisLike', DisLikeSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];