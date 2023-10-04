import mongoose from 'mongoose'

export class SavedVideoModel {
  _id: string;
  UserId: string;
  VideoId: string;
  Date: string;
}

export const SavedVideoSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true
  },
  VideoId: {
    type: String,
    require: true
  },
  Date: {
    type: String,
    require: true
  },
});

export interface SavedVideo extends mongoose.Document {
  readonly OwnerId: string;
  readonly VideoId: string;
  readonly Date: string;
}
