import { Body, Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { CommentLikeDislikeService } from './comment_like_dislike.service';
import { CommentLikeAndDisLikeCreateDto } from 'tools/dtos/comment_like_dislike.dto';

@Controller('comment_like_dislike')
export class CommentLikeDislikeController {
    constructor(private likeDisLikeService: CommentLikeDislikeService) { }

    @Get("like/:userId/:commentId")
    async likeCheck(@Param('userId') userId: string, @Param('commentId') commentId: string): Promise<any> {
        return this.likeDisLikeService.likeCheck({
            UserId: userId,
            CommentId: commentId
        });
    }

    @Get("disLike/:userId/:commentId")
    async disLikeCheck(@Param('userId') userId: string, @Param('commentId') commentId: string): Promise<any> {
        return this.likeDisLikeService.disLikeCheck({
            UserId: userId,
            CommentId: commentId
        });
    }

    @Post("like")
    async createLike(@Body() body: CommentLikeAndDisLikeCreateDto): Promise<boolean> {
        return this.likeDisLikeService.createLike(body);
    }

    @Post("disLike")
    async createDisLike(@Body() body: CommentLikeAndDisLikeCreateDto): Promise<boolean> {
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

    @Delete("likes/:commentId")
    async deleteLikes(@Param("commentId") commentId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteLikes(commentId);
    }

    @Delete("disLikes/:commentId")
    async deleteDisLikes(@Param("commentId") commentId: string): Promise<boolean> {
        return this.likeDisLikeService.deleteDisLikes(commentId);
    }
}
