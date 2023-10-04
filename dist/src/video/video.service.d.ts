import { Model } from 'mongoose';
import { VideoCreateDto, VideoUpdateDto } from 'tools/dtos/video.dto';
import { UserModel } from 'tools/models/user.model';
import { VideoModel } from 'tools/models/video.model';
export declare class VideoService {
    private videoMongo;
    private userMongo;
    constructor(videoMongo: Model<VideoModel>, userMongo: Model<UserModel>);
    findById(video_id: string): Promise<VideoModel>;
    findAll(type: string): Promise<VideoModel[]>;
    searchVideo(searchText: string): Promise<Object>;
    getUserVideos(user_id?: string): Promise<VideoModel[]>;
    create(body: VideoCreateDto): Promise<boolean>;
    update(video_id: string, body: VideoUpdateDto): Promise<boolean>;
    delete(video_id: string): Promise<boolean>;
}
