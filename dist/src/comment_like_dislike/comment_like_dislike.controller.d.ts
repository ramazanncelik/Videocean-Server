import { CommentLikeDislikeService } from './comment_like_dislike.service';
import { CommentLikeAndDisLikeCreateDto } from 'tools/dtos/comment_like_dislike.dto';
export declare class CommentLikeDislikeController {
    private likeDisLikeService;
    constructor(likeDisLikeService: CommentLikeDislikeService);
    likeCheck(userId: string, commentId: string): Promise<any>;
    disLikeCheck(userId: string, commentId: string): Promise<any>;
    createLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean>;
    createDisLike(body: CommentLikeAndDisLikeCreateDto): Promise<boolean>;
    deleteLike(likeId: string): Promise<boolean>;
    deleteDisLike(disLikeId: string): Promise<boolean>;
    deleteLikes(commentId: string): Promise<boolean>;
    deleteDisLikes(commentId: string): Promise<boolean>;
}
