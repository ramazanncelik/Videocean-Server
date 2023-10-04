"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentsProviders = void 0;
const comment_model_1 = require("../../tools/models/comment.model");
const comment_like_dislike_model_1 = require("../../tools/models/comment_like_dislike.model");
exports.commentsProviders = [
    {
        provide: 'COMMENT_MODEL',
        useFactory: (connection) => connection.model('Comment', comment_model_1.CommentSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'COMMENT_LIKE_MODEL',
        useFactory: (connection) => connection.model('CommentLike', comment_like_dislike_model_1.CommentLikeSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'COMMENT_DISLIKE_MODEL',
        useFactory: (connection) => connection.model('CommentDisLike', comment_like_dislike_model_1.CommentDisLikeSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=comment.providers.js.map