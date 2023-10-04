import { Model } from 'mongoose';
import { CommentCreateDto, CommentUpdateDto } from 'tools/dtos/comment.dto';
import { CommentModel } from 'tools/models/comment.model';
import { CommentDisLikeModel, CommentLikeModel } from 'tools/models/comment_like_dislike.model';
export declare class CommentService {
    private commentMongo;
    private commentLikeMongo;
    private commentDisLikeMongo;
    constructor(commentMongo: Model<CommentModel>, commentLikeMongo: Model<CommentLikeModel>, commentDisLikeMongo: Model<CommentDisLikeModel>);
    findById(comment_id: string): Promise<CommentModel>;
    findAll(video_id: string): Promise<CommentModel[]>;
    create(body: CommentCreateDto): Promise<boolean>;
    update(comment_id: string, body: CommentUpdateDto): Promise<boolean>;
    delete(comment_id: string): Promise<boolean>;
}
