import mongoose from 'mongoose'

export class CommentLikeModel {
  _id: string;
  UserId: string;
  CommentId: string;
}

export class CommentDisLikeModel {
  _id: string;
  UserId: string;
  CommentId: string;
}

export const CommentLikeSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true
  },
  CommentId: {
    type: String,
    require: true
  }
});

export const CommentDisLikeSchema = new mongoose.Schema({
  UserId: {
    type: String,
    require: true
  },
  CommentId: {
    type: String,
    require: true
  }
});

export interface CommentLike extends mongoose.Document {
  readonly UserId: string;
  readonly CommentId: string;
}

export interface CommentDisLike extends mongoose.Document {
  readonly UserId: string;
  readonly CommentId: string;
}