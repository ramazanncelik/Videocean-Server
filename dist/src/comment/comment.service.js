"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let CommentService = class CommentService {
    constructor(commentMongo, commentLikeMongo, commentDisLikeMongo) {
        this.commentMongo = commentMongo;
        this.commentLikeMongo = commentLikeMongo;
        this.commentDisLikeMongo = commentDisLikeMongo;
    }
    async findById(comment_id) {
        const comment = await this.commentMongo.findById(comment_id).exec();
        return comment;
    }
    async findAll(video_id) {
        const comments = await this.commentMongo.find({ VideoId: video_id }).exec();
        return comments;
    }
    async create(body) {
        const newComment = new this.commentMongo(body);
        const createdComment = await newComment.save();
        if (createdComment) {
            return true;
        }
        else {
            return false;
        }
    }
    async update(comment_id, body) {
        const updatedComment = await this.commentMongo.findByIdAndUpdate(comment_id, body, { new: true }).exec();
        if (updatedComment) {
            return true;
        }
        else {
            return false;
        }
    }
    async delete(comment_id) {
        const commentLikes = await this.commentLikeMongo.find({ CommentId: comment_id }).exec();
        const commentDisLikes = await this.commentDisLikeMongo.find({ CommentId: comment_id }).exec();
        for (let i = 0; i < commentLikes.length; i++) {
            await this.commentLikeMongo.findByIdAndDelete(commentLikes[i]._id).exec();
        }
        for (let i = 0; i < commentDisLikes.length; i++) {
            await this.commentDisLikeMongo.findByIdAndDelete(commentDisLikes[i]._id).exec();
        }
        const deletedComment = await this.commentMongo.findByIdAndDelete(comment_id).exec();
        if (deletedComment) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('COMMENT_MODEL')),
    __param(1, (0, common_1.Inject)('COMMENT_LIKE_MODEL')),
    __param(2, (0, common_1.Inject)('COMMENT_DISLIKE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], CommentService);
//# sourceMappingURL=comment.service.js.map