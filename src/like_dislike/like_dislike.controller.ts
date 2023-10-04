import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { LikeDislikeService } from './like_dislike.service';
import { LikeAndDisLikeCreateDto } from 'tools/dtos/like_dislike.dto';
import { LikeModel } from 'tools/models/like_dislike.model';

@Controller('like_dislike')
export class LikeDislikeController {
    constructor(private likeDisLikeService: LikeDislikeService) { }

    @Get("getLikedVideos/:userId")
    async getLikedVideos(@Param('userId') userId: string): Promise<LikeModel[]> {
        return this.likeDisLikeService.getLikedVideos(userId);
    }

    @Get("like/:userId/:videoId")
    async likeCheck(@Param('userId') userId: string, @Param('videoId') videoId: string): Promise<any> {
        return this.likeDisLikeService.likeCheck({
            UserId: userId,
            VideoId: videoId
        });
    }

    @Get("disLike/:userId/:videoId")
    async disLikeCheck(@Param('userId') userId: string, @Param('videoId') videoId: string): Promise<any> {
        return this.likeDisLikeService.disLikeCheck({
            UserId: userId,
            VideoId: videoId
        });
    }

    @Post("like")
    async createLike(@Body() body: LikeAndDisLikeCreateDto): Promise<boolean> {
        return this.likeDisLikeService.createLike(body);
    }

    @Post("disLike")
    async createDisLike(@Body() body: LikeAndDisLikeCreateDto): Promise<boolean> {
        return this.likeDisLikeService.createDisLike(body);
    }

    @Delete("like/:likeId")
    async deleteLike(@Param("likeId") likeId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteLike(likeId);
    }

    @Delete("disLike/:disLikeId")
    async deleteDisLike(@Param("disLikeId") disLikeId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteDisLike(disLikeId);
    }

    @Delete("likes/:videoId")
    async deleteLikes(@Param("videoId") videoId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteLikes(videoId);
    }

    @Delete("disLikes/:videoId")
    async deleteDisLikes(@Param("videoId") videoId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteDisLikes(videoId);
    }
}
