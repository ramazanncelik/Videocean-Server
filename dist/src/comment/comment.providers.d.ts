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
export declare const commentsProviders: ({
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    }> & {
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    }>> & import("mongoose").FlatRecord<{
        Date?: string;
        OwnerId?: string;
        Description?: string;
        Like?: number;
        DisLike?: number;
        VideoId?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
} | {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        UserId?: string;
        CommentId?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        UserId?: string;
        CommentId?: string;
    }> & {
        UserId?: string;
        CommentId?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        UserId?: string;
        CommentId?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        UserId?: string;
        CommentId?: string;
    }>> & import("mongoose").FlatRecord<{
        UserId?: string;
        CommentId?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    inject: string[];
})[];
