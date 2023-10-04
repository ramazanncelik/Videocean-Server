import mongoose from 'mongoose'

export class SubscriptionModel {
  _id: string;
  From: string;
  To: string;
}

export const SubscriptionSchema = new mongoose.Schema({
  From: {
    type: String,
    require: true
  },
  To: {
    type: String,
    require: true
  },
});

export interface Subscription extends mongoose.Document {
  readonly From: string;
  readonly To: string;
}