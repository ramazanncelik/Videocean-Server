import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ComplaintCreateDto } from 'tools/dtos/complaint.dto';
import { ComplaintModel } from 'tools/models/complaint.model';

@Injectable()
export class ComplaintService {
  constructor(
    @Inject('COMPLAINT_MODEL')
    private complaintMongo: Model<ComplaintModel>,
  ) { }

  async findAll(): Promise<ComplaintModel[]> {
    const complaints = await this.complaintMongo.find().exec();
    return complaints;
  }

  async create(body: ComplaintCreateDto): Promise<boolean> {
    const newComplaint = new this.complaintMongo(body);
    const createdComplaint = await newComplaint.save();
    if (createdComplaint) {
      return true;
    } else {
      return false;
    }
  }

  async delete(complaint_id: string): Promise<boolean> {
    const deletedComplaint = await this.complaintMongo.findByIdAndDelete(complaint_id).exec();
    if (deletedComplaint) {
      return true;
    } else {
      return false;
    }
  }

  async deleteVideoComplaints(videoId: string): Promise<boolean> {
    const complaints = await this.complaintMongo.find({ VideoId: videoId }).exec();
    if (complaints) {
      if (complaints.length !== 0) {
        for (let i = 0; i < complaints.length; i++) {
          await this.complaintMongo.findByIdAndDelete(complaints[i]._id);
          if (i + 1 === complaints.length) {
            return true;
          }
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

}
