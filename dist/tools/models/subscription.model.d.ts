import mongoose from 'mongoose';
export declare class SubscriptionModel {
    _id: string;
    From: string;
    To: string;
}
export declare const SubscriptionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    From?: string;
    To?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    From?: string;
    To?: string;
}>> & mongoose.FlatRecord<{
    From?: string;
    To?: string;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Subscription extends mongoose.Document {
    readonly From: string;
    readonly To: string;
}
