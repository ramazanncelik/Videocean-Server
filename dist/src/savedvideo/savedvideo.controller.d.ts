import { SavedVideoService } from './savedvideo.service';
import { SavedVideoModel } from 'tools/models/savedVideo.model';
import { SavedVideoCreateDto } from 'tools/dtos/savedVideo.dto';
export declare class SavedVideoController {
    private savedVideoService;
    constructor(savedVideoService: SavedVideoService);
    getSavedVideos(user_id: string): Promise<SavedVideoModel[]>;
    checkSavedVideo(user_id: string, video_id: string): Promise<Object>;
    create(body: SavedVideoCreateDto): Promise<boolean>;
    delete(savedVideo_id: string): Promise<boolean>;
    deleteVideoSaveds(videoId: string): Promise<boolean>;
}
