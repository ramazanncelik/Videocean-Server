import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentModel } from 'tools/models/comment.model';
import { CommentCreateDto, CommentUpdateDto } from 'tools/dtos/comment.dto';

@Controller('comment')
export class CommentController {
    constructor(private commentService: CommentService) { }

    @Get("videoComments/:id")
    async getComments(@Param('id') video_id: string): Promise<any> {
        return this.commentService.findAll(video_id);
    }

    @Get(":id")
    async getComment(@Param('id') comment_id: string): Promise<CommentModel> {
        return this.commentService.findById(comment_id);
    }

    @Post()
    async create(@Body() body: CommentCreateDto): Promise<boolean> {
        return this.commentService.create(body);
    }

    @Put(":id")
    async update(@Param('id') comment_id: string, @Body() body: CommentUpdateDto): Promise<boolean> {
        return this.commentService.update(comment_id, body);
    }

    @Delete(":id")
    async delete(@Param('id') comment_id: string): Promise<boolean> {
        return this.commentService.delete(comment_id);
    }

}
