"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosProviders = void 0;
const user_model_1 = require("../../tools/models/user.model");
const video_model_1 = require("../../tools/models/video.model");
exports.videosProviders = [
    {
        provide: 'VIDEO_MODEL',
        useFactory: (connection) => connection.model('Video', video_model_1.VideoSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_model_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=video.providers.js.map