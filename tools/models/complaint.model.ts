import mongoose from 'mongoose'

export class ComplaintModel {
  _id: string;
  OwnerId: string;
  VideoId: string;
  Title: string;
  Description: string;
  Date: string;
}

export const ComplaintSchema = new mongoose.Schema({
  OwnerId: {
    type: String,
    require: true
  },
  VideoId: {
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
  Date: {
    type: String,
    require: true
  },
});

export interface Complaint extends mongoose.Document {
  readonly OwnerId: string;
  readonly VideoId: string;
  readonly Title: string;
  readonly Description: string;
  readonly Date: string;
}
