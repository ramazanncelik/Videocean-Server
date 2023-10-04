import mongoose from 'mongoose';
export declare class CommentModel {
    _id: string;
    OwnerId: string;
    VideoId: string;
    Description: string;
    Date: string;
    Like: number;
    DisLike: number;
}
export declare const CommentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Date?: string;
    OwnerId?: string;
    Description?: string;
    Like?: number;
    DisLike?: number;
    VideoId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    Date?: string;
    OwnerId?: string;
    Description?: string;
    Like?: number;
    DisLike?: number;
    VideoId?: string;
}>> & mongoose.FlatRecord<{
    Date?: string;
    OwnerId?: string;
    Description?: string;
    Like?: number;
    DisLike?: number;
    VideoId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Comment extends mongoose.Document {
    readonly OwnerId: string;
    readonly VideoId: string;
    readonly Description: string;
    readonly Date: string;
    readonly Like: number;
    readonly DisLike: number;
}
