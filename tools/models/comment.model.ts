import mongoose from 'mongoose'

export class CommentModel {
  _id: string;
  OwnerId: string;
  VideoId: string;
  Description: string;
  Date: string;
  Like: number;
  DisLike: number;
}

export const CommentSchema = new mongoose.Schema({
  OwnerId: {
    type: String,
    require: true
  },
  VideoId: {
    type: String,
    require: true
  },
  Description: {
    type: String,
    require: true
  },
  Date: {
    type: String,
    require: true
  },
  Like: {
    type: Number,
    require: true
  },
  DisLike: {
    type: Number,
    require: true
  }
});

export interface Comment extends mongoose.Document {
  readonly OwnerId: string;
  readonly VideoId: string;
  readonly Description: string;
  readonly Date: string;
  readonly Like: number;
  readonly DisLike: number;
}
