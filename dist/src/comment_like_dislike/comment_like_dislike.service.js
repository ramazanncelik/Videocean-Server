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
exports.CommentLikeDislikeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let CommentLikeDislikeService = class CommentLikeDislikeService {
    constructor(commentMongo, likeMongo, disLikeMongo) {
        this.commentMongo = commentMongo;
        this.likeMongo = likeMongo;
        this.disLikeMongo = disLikeMongo;
    }
    async likeCheck(body) {
        const like = await this.likeMongo.findOne(body);
        if (like) {
            return { success: true, result: like };
        }
        else {
            return { success: false, result: null };
        }
    }
    async disLikeCheck(body) {
        const disLike = await this.disLikeMongo.findOne(body);
        if (disLike) {
            return { success: true, result: disLike };
        }
        else {
            return { success: false, result: null };
        }
    }
    async createLike(body) {
        const commentInfo = await this.commentMongo.findById(body.CommentId).exec();
        const newLike = new this.likeMongo(body);
        const createdLike = await newLike.save();
        if (createdLike) {
            await this.commentMongo.findByIdAndUpdate(body.CommentId, { Like: commentInfo.Like + 1 }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async createDisLike(body) {
        const commentInfo = await this.commentMongo.findById(body.CommentId).exec();
        const newDisLike = new this.disLikeMongo(body);
        const createdDisLike = await newDisLike.save();
        if (createdDisLike) {
            await this.commentMongo.findByIdAndUpdate(body.CommentId, { DisLike: commentInfo.DisLike + 1 }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteLike(likeId) {
        const deletedLike = await this.likeMongo.findByIdAndDelete(likeId).exec();
        const commentInfo = await this.commentMongo.findById(deletedLike.CommentId).exec();
        if (deletedLike) {
            await this.commentMongo.findByIdAndUpdate(commentInfo._id, { Like: commentInfo.Like - 1 }, { new: true }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteDisLike(disLikeId) {
        const deletedDisLike = await this.disLikeMongo.findByIdAndDelete(disLikeId).exec();
        const commentInfo = await this.commentMongo.findById(deletedDisLike.CommentId).exec();
        if (deletedDisLike) {
            await this.commentMongo.findByIdAndUpdate(commentInfo._id, { DisLike: commentInfo.DisLike - 1 }, { new: true }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteLikes(commentId) {
        const likes = await this.likeMongo.find({ CommentId: commentId }).exec();
        if (likes) {
            if (likes.length !== 0) {
                for (let i = 0; i < likes.length; i++) {
                    await this.likeMongo.findByIdAndDelete(likes[i]._id);
                    if (i + 1 === likes.length) {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
    async deleteDisLikes(commentId) {
        const disLikes = await this.disLikeMongo.find({ CommentId: commentId }).exec();
        if (disLikes) {
            if (disLikes.length !== 0) {
                for (let i = 0; i < disLikes.length; i++) {
                    await this.disLikeMongo.findByIdAndDelete(disLikes[i]._id);
                    if (i + 1 === disLikes.length) {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
};
exports.CommentLikeDislikeService = CommentLikeDislikeService;
exports.CommentLikeDislikeService = CommentLikeDislikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('COMMENT_MODEL')),
    __param(1, (0, common_1.Inject)('COMMENT_LIKE_MODEL')),
    __param(2, (0, common_1.Inject)('COMMENT_DISLIKE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], CommentLikeDislikeService);
//# sourceMappingURL=comment_like_dislike.service.js.map