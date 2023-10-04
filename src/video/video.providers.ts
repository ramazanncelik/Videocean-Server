import { Connection } from 'mongoose';
import { UserSchema } from 'tools/models/user.model';
import { VideoSchema } from 'tools/models/video.model';

export const videosProviders = [
  {
    provide: 'VIDEO_MODEL',
    useFactory: (connection: Connection) => connection.model('Video', VideoSchema),
    inject: ['DATABASE_CONNECTION'],
  }, {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];