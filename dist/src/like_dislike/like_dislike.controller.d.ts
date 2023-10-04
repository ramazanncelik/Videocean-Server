import { LikeDislikeService } from './like_dislike.service';
import { LikeAndDisLikeCreateDto } from 'tools/dtos/like_dislike.dto';
import { LikeModel } from 'tools/models/like_dislike.model';
export declare class LikeDislikeController {
    private likeDisLikeService;
    constructor(likeDisLikeService: LikeDislikeService);
    getLikedVideos(userId: string): Promise<LikeModel[]>;
    likeCheck(userId: string, videoId: string): Promise<any>;
    disLikeCheck(userId: string, videoId: string): Promise<any>;
    createLike(body: LikeAndDisLikeCreateDto): Promise<boolean>;
    createDisLike(body: LikeAndDisLikeCreateDto): Promise<boolean>;
    deleteLike(likeId: string): Promise<boolean>;
    deleteDisLike(disLikeId: string): Promise<boolean>;
    deleteLikes(videoId: string): Promise<boolean>;
    deleteDisLikes(videoId: string): Promise<boolean>;
}
