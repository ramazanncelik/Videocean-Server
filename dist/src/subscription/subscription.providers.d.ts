/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Connection } from 'mongoose';
export declare const subscriptionsProviders: ({
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        From?: string;
        To?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        From?: string;
        To?: string;
    }> & {
        From?: string;
        To?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        From?: string;
        To?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        From?: string;
        To?: string;
    }>> & import("mongoose").FlatRecord<{
        From?: string;
        To?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
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
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
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
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
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
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
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
    }>> & import("mongoose").FlatRecord<{
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
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
})[];
