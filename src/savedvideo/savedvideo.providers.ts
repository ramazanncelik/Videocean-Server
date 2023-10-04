import { Connection } from 'mongoose';
import { SavedVideoSchema } from 'tools/models/savedVideo.model';

export const savedVideosProviders = [
  {
    provide: 'SAVEDVIDEO_MODEL',
    useFactory: (connection: Connection) => connection.model('SavedVideo', SavedVideoSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];