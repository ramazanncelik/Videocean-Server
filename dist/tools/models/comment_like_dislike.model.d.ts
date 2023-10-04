import mongoose from 'mongoose';
export declare class CommentLikeModel {
    _id: string;
    UserId: string;
    CommentId: string;
}
export declare class CommentDisLikeModel {
    _id: string;
    UserId: string;
    CommentId: string;
}
export declare const CommentLikeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    UserId?: string;
    CommentId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    UserId?: string;
    CommentId?: string;
}>> & mongoose.FlatRecord<{
    UserId?: string;
    CommentId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export declare const CommentDisLikeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    UserId?: string;
    CommentId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    UserId?: string;
    CommentId?: string;
}>> & mongoose.FlatRecord<{
    UserId?: string;
    CommentId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface CommentLike extends mongoose.Document {
    readonly UserId: string;
    readonly CommentId: string;
}
export interface CommentDisLike extends mongoose.Document {
    readonly UserId: string;
    readonly CommentId: string;
}
