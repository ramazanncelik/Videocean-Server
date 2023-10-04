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
exports.VideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let VideoService = class VideoService {
    constructor(videoMongo, userMongo) {
        this.videoMongo = videoMongo;
        this.userMongo = userMongo;
    }
    async findById(video_id) {
        const video = await this.videoMongo.findById(video_id).exec();
        return video;
    }
    async findAll(type) {
        if (type !== "all") {
            const videos = await this.videoMongo.find({ Category: type }).exec();
            return videos;
        }
        else {
            const videos = await this.videoMongo.find().exec();
            return videos;
        }
    }
    async searchVideo(searchText) {
        const videos = await this.videoMongo.find({ Title: { $regex: searchText, $options: 'i' } }).exec();
        if (videos) {
            return { success: true, result: videos };
        }
        else {
            return { success: false, result: [] };
        }
    }
    async getUserVideos(user_id) {
        const videos = await this.videoMongo.find({ OwnerId: user_id }).exec();
        return videos;
    }
    async create(body) {
        const newVideo = new this.videoMongo(body);
        const createdVideo = await newVideo.save();
        if (createdVideo) {
            const videoOwner = await this.userMongo.findById(body.OwnerId);
            await this.userMongo.findByIdAndUpdate(videoOwner._id, { VideoCount: videoOwner.VideoCount + 1 }, { new: true });
            return true;
        }
        else {
            return false;
        }
    }
    async update(video_id, body) {
        const updatedVideo = this.videoMongo.findByIdAndUpdate(video_id, body, { new: true }).exec();
        if (updatedVideo) {
            return true;
        }
        else {
            return false;
        }
    }
    async delete(video_id) {
        const deletedVideo = await this.videoMongo.findByIdAndDelete(video_id).exec();
        const videoOwner = await this.userMongo.findById(deletedVideo.OwnerId);
        const updatedVideoOwner = await this.userMongo.findByIdAndUpdate(videoOwner._id, { VideoCount: videoOwner.VideoCount - 1 }, { new: true });
        if (deletedVideo && updatedVideoOwner) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.VideoService = VideoService;
exports.VideoService = VideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('VIDEO_MODEL')),
    __param(1, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], VideoService);
//# sourceMappingURL=video.service.js.map