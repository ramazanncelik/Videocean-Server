"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDisLikeSchema = exports.CommentLikeSchema = exports.CommentDisLikeModel = exports.CommentLikeModel = void 0;
const mongoose_1 = require("mongoose");
class CommentLikeModel {
}
exports.CommentLikeModel = CommentLikeModel;
class CommentDisLikeModel {
}
exports.CommentDisLikeModel = CommentDisLikeModel;
exports.CommentLikeSchema = new mongoose_1.default.Schema({
    UserId: {
        type: String,
        require: true
    },
    CommentId: {
        type: String,
        require: true
    }
});
exports.CommentDisLikeSchema = new mongoose_1.default.Schema({
    UserId: {
        type: String,
        require: true
    },
    CommentId: {
        type: String,
        require: true
    }
});
//# sourceMappingURL=comment_like_dislike.model.js.map