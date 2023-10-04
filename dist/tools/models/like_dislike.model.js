"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisLikeSchema = exports.LikeSchema = exports.DisLikeModel = exports.LikeModel = void 0;
const mongoose_1 = require("mongoose");
class LikeModel {
}
exports.LikeModel = LikeModel;
class DisLikeModel {
}
exports.DisLikeModel = DisLikeModel;
exports.LikeSchema = new mongoose_1.default.Schema({
    UserId: {
        type: String,
        require: true
    },
    VideoId: {
        type: String,
        require: true
    }
});
exports.DisLikeSchema = new mongoose_1.default.Schema({
    UserId: {
        type: String,
        require: true
    },
    VideoId: {
        type: String,
        require: true
    }
});
//# sourceMappingURL=like_dislike.model.js.map