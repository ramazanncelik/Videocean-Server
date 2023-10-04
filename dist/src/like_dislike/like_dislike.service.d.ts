import { Model } from 'mongoose';
import { LikeAndDisLikeCreateDto } from 'tools/dtos/like_dislike.dto';
import { DisLikeModel, LikeModel } from 'tools/models/like_dislike.model';
import { VideoModel } from 'tools/models/video.model';
export declare class LikeDislikeService {
    private videoMongo;
    private likeMongo;
    private disLikeMongo;
    constructor(videoMongo: Model<VideoModel>, likeMongo: Model<LikeModel>, disLikeMongo: Model<DisLikeModel>);
    getLikedVideos(user_id: string): Promise<LikeModel[]>;
    likeCheck(body: LikeAndDisLikeCreateDto): Promise<any>;
    disLikeCheck(body: LikeAndDisLikeCreateDto): Promise<any>;
    createLike(body: LikeAndDisLikeCreateDto): Promise<boolean>;
    createDisLike(body: LikeAndDisLikeCreateDto): Promise<boolean>;
    deleteLike(likeId: string): Promise<boolean>;
    deleteDisLike(disLikeId: string): Promise<boolean>;
    deleteLikes(videoId: string): Promise<boolean>;
    deleteDisLikes(videoId: string): Promise<boolean>;
}
