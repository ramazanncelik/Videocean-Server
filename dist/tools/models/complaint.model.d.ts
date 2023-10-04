import mongoose from 'mongoose';
export declare class ComplaintModel {
    _id: string;
    OwnerId: string;
    VideoId: string;
    Title: string;
    Description: string;
    Date: string;
}
export declare const ComplaintSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    Date?: string;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    VideoId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    Date?: string;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    VideoId?: string;
}>> & mongoose.FlatRecord<{
    Date?: string;
    OwnerId?: string;
    Title?: string;
    Description?: string;
    VideoId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Complaint extends mongoose.Document {
    readonly OwnerId: string;
    readonly VideoId: string;
    readonly Title: string;
    readonly Description: string;
    readonly Date: string;
}
