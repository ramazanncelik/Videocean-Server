import { ComplaintService } from './complaint.service';
import { ComplaintCreateDto } from 'tools/dtos/complaint.dto';
import { ComplaintModel } from 'tools/models/complaint.model';
export declare class ComplaintController {
    private complaintService;
    constructor(complaintService: ComplaintService);
    getComplaints(): Promise<ComplaintModel[]>;
    create(body: ComplaintCreateDto): Promise<boolean>;
    delete(complaint_id: string): Promise<boolean>;
    deleteVideoComplaints(videoId: string): Promise<boolean>;
}
