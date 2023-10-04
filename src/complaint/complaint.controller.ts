import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintCreateDto } from 'tools/dtos/complaint.dto';
import { ComplaintModel } from 'tools/models/complaint.model';

@Controller('complaint')
export class ComplaintController {
    constructor(private complaintService: ComplaintService) { }

    @Get()
    async getComplaints(): Promise<ComplaintModel[]> {
        return this.complaintService.findAll();
    }

    @Post()
    async create(@Body() body: ComplaintCreateDto): Promise<boolean> {
        return this.complaintService.create(body);
    }

    @Delete(":id")
    async delete(@Param('id') complaint_id: string): Promise<boolean> {
        return this.complaintService.delete(complaint_id);
    }

    @Delete("videoComplaints/:videoId")
    async deleteVideoComplaints(@Param('videoId') videoId: string): Promise<boolean> {
        return this.complaintService.deleteVideoComplaints(videoId);
    }

}
