import mongoose from 'mongoose'

export class VideoModel {
  _id: string;
  OwnerId: string;
  Title: string;
  Description: string;
  CoverPhotoUrl: string;
  VideoUrl: string;
  Category: string;
  Like: number;
  DisLike: number;
  Comment: number;
  ViewsCount: number;
  Date: string;
}

export const VideoSchema = new mongoose.Schema({
  OwnerId: {
    type: String,
    require: true
  },
  Title: {
    type: String,
    require: true
  },
  Description: {
    type: String,
    require: true
  },
  CoverPhotoUrl: {
    type: String,
    require: true
  },
  VideoUrl: {
    type: String,
    require: true
  },
  Category: {
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
  },
  Comment: {
    type: Number,
    require: true
  },
  ViewsCount: {
    type: Number,
    require: true
  },
  Date: {
    type: Date,
    require: true
  },
});

export interface Video extends mongoose.Document {
  readonly OwnerId: string;
  readonly Title: string;
  readonly Description: string;
  readonly CoverPhotoUrl: string;
  readonly VideoUrl: string;
  readonly Category: string;
  readonly Like: number;
  readonly DisLike: number;
  readonly Comment: number;
  readonly ViewsCount: number;
  readonly Date: string;
}