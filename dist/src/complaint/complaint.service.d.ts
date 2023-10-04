import { Model } from 'mongoose';
import { ComplaintCreateDto } from 'tools/dtos/complaint.dto';
import { ComplaintModel } from 'tools/models/complaint.model';
export declare class ComplaintService {
    private complaintMongo;
    constructor(complaintMongo: Model<ComplaintModel>);
    findAll(): Promise<ComplaintModel[]>;
    create(body: ComplaintCreateDto): Promise<boolean>;
    delete(complaint_id: string): Promise<boolean>;
    deleteVideoComplaints(videoId: string): Promise<boolean>;
}
