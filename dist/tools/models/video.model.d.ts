import mongoose from 'mongoose';
export declare class VideoModel {
    _id: string;
    OwnerId: string;
    Title: string;
    Description: string;
    CoverPhotoUrl: string;
    VideoUrl: string;
    Category: string;
    Like: number;
    DisLike: number;
    Comment: number;
    ViewsCount: number;
    Date: string;
}
export declare const VideoSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Date?: Date;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    CoverPhotoUrl?: string;
    VideoUrl?: string;
    Category?: string;
    Like?: number;
    DisLike?: number;
    Comment?: number;
    ViewsCount?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    Date?: Date;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    CoverPhotoUrl?: string;
    VideoUrl?: string;
    Category?: string;
    Like?: number;
    DisLike?: number;
    Comment?: number;
    ViewsCount?: number;
}>> & mongoose.FlatRecord<{
    Date?: Date;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    CoverPhotoUrl?: string;
    VideoUrl?: string;
    Category?: string;
    Like?: number;
    DisLike?: number;
    Comment?: number;
    ViewsCount?: number;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Video extends mongoose.Document {
    readonly OwnerId: string;
    readonly Title: string;
    readonly Description: string;
    readonly CoverPhotoUrl: string;
    readonly VideoUrl: string;
    readonly Category: string;
    readonly Like: number;
    readonly DisLike: number;
    readonly Comment: number;
    readonly ViewsCount: number;
    readonly Date: string;
}
