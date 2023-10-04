import { Model } from 'mongoose';
import { CommentLikeAndDisLikeCreateDto } from 'tools/dtos/comment_like_dislike.dto';
import { CommentModel } from 'tools/models/comment.model';
import { CommentDisLikeModel, CommentLikeModel } from 'tools/models/comment_like_dislike.model';
export declare class CommentLikeDislikeService {
    private commentMongo;
    private likeMongo;
    private disLikeMongo;
    constructor(commentMongo: Model<CommentModel>, likeMongo: Model<CommentLikeModel>, disLikeMongo: Model<CommentDisLikeModel>);
    likeCheck(body: CommentLikeAndDisLikeCreateDto): Promise<any>;
    disLikeCheck(body: CommentLikeAndDisLikeCreateDto): Promise<any>;
    createLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean>;
    createDisLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean>;
    deleteLike(likeId: string): Promise<boolean>;
    deleteDisLike(disLikeId: string): Promise<boolean>;
    deleteLikes(commentId: string): Promise<boolean>;
    deleteDisLikes(commentId: string): Promise<boolean>;
}
