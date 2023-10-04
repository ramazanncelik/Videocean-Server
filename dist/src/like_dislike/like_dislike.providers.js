"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes_dislikes_Providers = void 0;
const like_dislike_model_1 = require("../../tools/models/like_dislike.model");
const video_model_1 = require("../../tools/models/video.model");
exports.likes_dislikes_Providers = [
    {
        provide: 'VIDEO_MODEL',
        useFactory: (connection) => connection.model('Video', video_model_1.VideoSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'LIKE_MODEL',
        useFactory: (connection) => connection.model('Like', like_dislike_model_1.LikeSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'DISLIKE_MODEL',
        useFactory: (connection) => connection.model('DisLike', like_dislike_model_1.DisLikeSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=like_dislike.providers.js.map