"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoSchema = exports.VideoModel = void 0;
const mongoose_1 = require("mongoose");
class VideoModel {
}
exports.VideoModel = VideoModel;
exports.VideoSchema = new mongoose_1.default.Schema({
    OwnerId: {
        type: String,
        require: true
    },
    Title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    CoverPhotoUrl: {
        type: String,
        require: true
    },
    VideoUrl: {
        type: String,
        require: true
    },
    Category: {
        type: String,
        require: true
    },
    Like: {
        type: Number,
        require: true
    },
    DisLike: {
        type: Number,
        require: true
    },
    Comment: {
        type: Number,
        require: true
    },
    ViewsCount: {
        type: Number,
        require: true
    },
    Date: {
        type: Date,
        require: true
    },
});
//# sourceMappingURL=video.model.js.map