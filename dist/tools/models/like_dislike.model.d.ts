import mongoose from 'mongoose';
export declare class LikeModel {
    _id: string;
    UserId: string;
    VideoId: string;
}
export declare class DisLikeModel {
    _id: string;
    UserId: string;
    VideoId: string;
}
export declare const LikeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    UserId?: string;
    VideoId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    UserId?: string;
    VideoId?: string;
}>> & mongoose.FlatRecord<{
    UserId?: string;
    VideoId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const DisLikeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    UserId?: string;
    VideoId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    UserId?: string;
    VideoId?: string;
}>> & mongoose.FlatRecord<{
    UserId?: string;
    VideoId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Like extends mongoose.Document {
    readonly UserId: string;
    readonly VideoId: string;
}
export interface DisLike extends mongoose.Document {
    readonly UserId: string;
    readonly VideoId: string;
}
