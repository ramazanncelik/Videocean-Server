import mongoose from 'mongoose';
export declare class SavedVideoModel {
    _id: string;
    UserId: string;
    VideoId: string;
    Date: string;
}
export declare const SavedVideoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Date?: string;
    UserId?: string;
    VideoId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    Date?: string;
    UserId?: string;
    VideoId?: string;
}>> & mongoose.FlatRecord<{
    Date?: string;
    UserId?: string;
    VideoId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface SavedVideo extends mongoose.Document {
    readonly OwnerId: string;
    readonly VideoId: string;
    readonly Date: string;
}
