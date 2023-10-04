import { VideoService } from './video.service';
import { VideoCreateDto, VideoUpdateDto } from 'tools/dtos/video.dto';
import { VideoModel } from 'tools/models/video.model';
export declare class VideoController {
    private videoService;
    constructor(videoService: VideoService);
    getAllVideos(type: string): Promise<VideoModel[]>;
    searchVideo(searchText: string): Promise<Object>;
    getVideo(id: string): Promise<VideoModel>;
    getUserVideos(user_id: string): Promise<any>;
    createVideo(body: VideoCreateDto): Promise<any>;
    updateVideo(id: string, body: VideoUpdateDto): Promise<any>;
    deleteVideo(id: string): Promise<any>;
}
