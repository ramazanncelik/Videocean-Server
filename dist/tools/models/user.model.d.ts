import mongoose from 'mongoose';
export declare class UserModel {
    _id: string;
    Email: string;
    NickName: string;
    FullName: string;
    Image: string;
    Password: string;
    SubscriberCount: number;
    VideoCount: number;
    ConfirmationCode: string;
    Role: string;
    UsageAgreement: boolean;
    EmailVerify: boolean;
}
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Email?: string;
    Password?: string;
    NickName?: string;
    FullName?: string;
    Biography?: string;
    ImageUrl?: string;
    SubscriberCount?: number;
    VideoCount?: number;
    ConfirmationCode?: string;
    Role?: string;
    UsageAgreement?: boolean;
    EmailVerify?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    Email?: string;
    Password?: string;
    NickName?: string;
    FullName?: string;
    Biography?: string;
    ImageUrl?: string;
    SubscriberCount?: number;
    VideoCount?: number;
    ConfirmationCode?: string;
    Role?: string;
    UsageAgreement?: boolean;
    EmailVerify?: boolean;
}>> & mongoose.FlatRecord<{
    Email?: string;
    Password?: string;
    NickName?: string;
    FullName?: string;
    Biography?: string;
    ImageUrl?: string;
    SubscriberCount?: number;
    VideoCount?: number;
    ConfirmationCode?: string;
    Role?: string;
    UsageAgreement?: boolean;
    EmailVerify?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface User extends mongoose.Document {
    readonly Email: string;
    readonly NickName: string;
    readonly FullName: string;
    readonly Image: string;
    readonly Password: string;
    readonly Subscriber: number;
    readonly VideoCount: number;
    readonly ConfirmationCode: string;
    readonly Role: string;
    readonly UsageAgreement: boolean;
    readonly EmailVerify: boolean;
}
