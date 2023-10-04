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
exports.LikeDislikeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let LikeDislikeService = class LikeDislikeService {
    constructor(videoMongo, likeMongo, disLikeMongo) {
        this.videoMongo = videoMongo;
        this.likeMongo = likeMongo;
        this.disLikeMongo = disLikeMongo;
    }
    async getLikedVideos(user_id) {
        const likedVideos = await this.likeMongo.find({ UserId: user_id }).exec();
        return likedVideos;
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
        const videoInfo = await this.videoMongo.findById(body.VideoId).exec();
        const newLike = new this.likeMongo(body);
        const createdLike = await newLike.save();
        if (createdLike) {
            await this.videoMongo.findByIdAndUpdate(body.VideoId, { Like: videoInfo.Like + 1 }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async createDisLike(body) {
        const videoInfo = await this.videoMongo.findById(body.VideoId).exec();
        const newDisLike = new this.disLikeMongo(body);
        const createdDisLike = await newDisLike.save();
        if (createdDisLike) {
            await this.videoMongo.findByIdAndUpdate(body.VideoId, { DisLike: videoInfo.DisLike + 1 }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteLike(likeId) {
        const deletedLike = await this.likeMongo.findByIdAndDelete(likeId).exec();
        const videoInfo = await this.videoMongo.findById(deletedLike.VideoId).exec();
        if (deletedLike) {
            await this.videoMongo.findByIdAndUpdate(videoInfo._id, { Like: videoInfo.Like - 1 }, { new: true }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteDisLike(disLikeId) {
        const deletedDisLike = await this.disLikeMongo.findByIdAndDelete(disLikeId).exec();
        const videoInfo = await this.videoMongo.findById(deletedDisLike.VideoId).exec();
        if (deletedDisLike) {
            await this.videoMongo.findByIdAndUpdate(videoInfo._id, { DisLike: videoInfo.DisLike - 1 }, { new: true }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async deleteLikes(videoId) {
        const likes = await this.likeMongo.find({ VideoId: videoId }).exec();
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
    async deleteDisLikes(videoId) {
        const disLikes = await this.disLikeMongo.find({ VideoId: videoId }).exec();
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
exports.LikeDislikeService = LikeDislikeService;
exports.LikeDislikeService = LikeDislikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('VIDEO_MODEL')),
    __param(1, (0, common_1.Inject)('LIKE_MODEL')),
    __param(2, (0, common_1.Inject)('DISLIKE_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model,
        mongoose_1.Model])
], LikeDislikeService);
//# sourceMappingURL=like_dislike.service.js.map