"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentSchema = exports.CommentModel = void 0;
const mongoose_1 = require("mongoose");
class CommentModel {
}
exports.CommentModel = CommentModel;
exports.CommentSchema = new mongoose_1.default.Schema({
    OwnerId: {
        type: String,
        require: true
    },
    VideoId: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Date: {
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
    }
});
//# sourceMappingURL=comment.model.js.map