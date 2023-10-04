import mongoose from 'mongoose'

export class UserModel {
  _id: string;
  Email: string;
  NickName: string;
  FullName: string;
  Image: string;
  Password: string;
  SubscriberCount: number;
  VideoCount: number;
  ConfirmationCode: string;
  Role:string;
  UsageAgreement: boolean;
  EmailVerify: boolean;
}

export const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    require: true
  },
  Password: {
    type: String,
    require: true
  },
  NickName: {
    type: String,
    require: true
  },
  FullName: {
    type: String,
    require: true
  },
  Biography: {
    type: String,
    require: true
  },
  ImageUrl: {
    type: String,
    require: true
  },
  SubscriberCount: {
    type: Number,
    require: true
  },
  VideoCount: {
    type: Number,
    require: true
  },
  ConfirmationCode: {
    type: String,
    require: true
  },
  Role: {
    type: String,
    require: true
  },
  UsageAgreement: {
    type: Boolean,
    require: true
  },
  EmailVerify: {
    type: Boolean,
    require: true
  },
});

export interface User extends mongoose.Document {
  readonly Email: string;
  readonly NickName: string;
  readonly FullName: string;
  readonly Image: string;
  readonly Password: string;
  readonly Subscriber: number;
  readonly VideoCount: number;
  readonly ConfirmationCode: string;
  readonly Role: string;
  readonly UsageAgreement: boolean;
  readonly EmailVerify: boolean;
}