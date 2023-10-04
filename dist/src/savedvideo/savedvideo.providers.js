"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.savedVideosProviders = void 0;
const savedVideo_model_1 = require("../../tools/models/savedVideo.model");
exports.savedVideosProviders = [
    {
        provide: 'SAVEDVIDEO_MODEL',
        useFactory: (connection) => connection.model('SavedVideo', savedVideo_model_1.SavedVideoSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=savedvideo.providers.js.map