import { Model } from 'mongoose';
import { SavedVideoCreateDto } from 'tools/dtos/savedVideo.dto';
import { SavedVideoModel } from 'tools/models/savedVideo.model';
export declare class SavedVideoService {
    private savedVideosMongo;
    constructor(savedVideosMongo: Model<SavedVideoModel>);
    findAll(user_id: string): Promise<SavedVideoModel[]>;
    findOne(body: any): Promise<Object>;
    create(body: SavedVideoCreateDto): Promise<boolean>;
    delete(savedVideo_id: string): Promise<boolean>;
    deleteVideoSaveds(videoId: string): Promise<boolean>;
}
