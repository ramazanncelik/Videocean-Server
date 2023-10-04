import mongoose from 'mongoose'

export class LikeModel {
  _id: string;
  UserId: string;
  VideoId: string;
}

export class DisLikeModel {
  _id: string;
  UserId: string;
  VideoId: string;
}

export const LikeSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true
  },
  VideoId: {
    type: String,
    require: true
  }
});

export const DisLikeSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true
  },
  VideoId: {
    type: String,
    require: true
  }
});

export interface Like extends mongoose.Document {
  readonly UserId: string;
  readonly VideoId: string;
}

export interface DisLike extends mongoose.Document {
  readonly UserId: string;
  readonly VideoId: string;
}