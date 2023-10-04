import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoCreateDto, VideoUpdateDto } from 'tools/dtos/video.dto';
import { VideoModel } from 'tools/models/video.model';

@Controller('video')
export class VideoController {
    constructor(private videoService: VideoService) { }

    @Get("getAllVideos/:type")
    async getAllVideos(@Param('type') type: string): Promise<VideoModel[]> {
        return this.videoService.findAll(type);
    }

    @Get("searchVideo/:searchText")
    async searchVideo(@Param('searchText') searchText: string): Promise<Object> {
        return this.videoService.searchVideo(searchText);
    }

    @Get(":id")
    async getVideo(@Param('id') id: string): Promise<VideoModel> {
        return this.videoService.findById(id);
    }

    @Get(":id/userVideos")
    async getUserVideos(@Param('id') user_id: string): Promise<any> {
        return this.videoService.getUserVideos(user_id);
    }

    @Post()
    async createVideo(@Body() body: VideoCreateDto): Promise<any> {
        return this.videoService.create(body);
    }

    @Put(":id")
    async updateVideo(@Param('id') id: string, @Body() body: VideoUpdateDto): Promise<any> {
        return this.videoService.update(id, body);
    }

    @Delete(":id")
    async deleteVideo(@Param('id') id: string): Promise<any> {
        return this.videoService.delete(id);
    }
}
