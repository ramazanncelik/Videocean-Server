import { CommentService } from './comment.service';
import { CommentModel } from 'tools/models/comment.model';
import { CommentCreateDto, CommentUpdateDto } from 'tools/dtos/comment.dto';
export declare class CommentController {
    private commentService;
    constructor(commentService: CommentService);
    getComments(video_id: string): Promise<any>;
    getComment(comment_id: string): Promise<CommentModel>;
    create(body: CommentCreateDto): Promise<boolean>;
    update(comment_id: string, body: CommentUpdateDto): Promise<boolean>;
    delete(comment_id: string): Promise<boolean>;
}
