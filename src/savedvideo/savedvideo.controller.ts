import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { SavedVideoService } from './savedvideo.service';
import { SavedVideoModel } from 'tools/models/savedVideo.model';
import { SavedVideoCreateDto } from 'tools/dtos/savedVideo.dto';

@Controller('savedvideo')
export class SavedVideoController {
    constructor(private savedVideoService: SavedVideoService) { }

    @Get("all/:id")
    async getSavedVideos(@Param('id') user_id: string): Promise<SavedVideoModel[]> {
        return this.savedVideoService.findAll(user_id);
    }

    @Get("check/:userId/:videoId")
    async checkSavedVideo(@Param('userId') user_id: string, @Param('videoId') video_id: string): Promise<Object> {
        return this.savedVideoService.findOne({
            UserId: user_id,
            VideoId: video_id
        });
    }

    @Post()
    async create(@Body() body: SavedVideoCreateDto): Promise<boolean> {
        return this.savedVideoService.create(body);
    }

    @Delete(":id")
    async delete(@Param('id') savedVideo_id: string): Promise<boolean> {
        return this.savedVideoService.delete(savedVideo_id);
    }

    @Delete("videoSaveds/:videoId")
    async deleteVideoSaveds(@Param('videoId') videoId: string): Promise<boolean> {
        return this.savedVideoService.deleteVideoSaveds(videoId);
    }

}
