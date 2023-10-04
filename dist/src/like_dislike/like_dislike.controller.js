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
exports.LikeDislikeController = void 0;
const common_1 = require("@nestjs/common");
const like_dislike_service_1 = require("./like_dislike.service");
const like_dislike_dto_1 = require("../../tools/dtos/like_dislike.dto");
let LikeDislikeController = class LikeDislikeController {
    constructor(likeDisLikeService) {
        this.likeDisLikeService = likeDisLikeService;
    }
    async getLikedVideos(userId) {
        return this.likeDisLikeService.getLikedVideos(userId);
    }
    async likeCheck(userId, videoId) {
        return this.likeDisLikeService.likeCheck({
            UserId: userId,
            VideoId: videoId
        });
    }
    async disLikeCheck(userId, videoId) {
        return this.likeDisLikeService.disLikeCheck({
            UserId: userId,
            VideoId: videoId
        });
    }
    async createLike(body) {
        return this.likeDisLikeService.createLike(body);
    }
    async createDisLike(body) {
        return this.likeDisLikeService.createDisLike(body);
    }
    async deleteLike(likeId) {
        return this.likeDisLikeService.deleteLike(likeId);
    }
    async deleteDisLike(disLikeId) {
        return this.likeDisLikeService.deleteDisLike(disLikeId);
    }
    async deleteLikes(videoId) {
        return this.likeDisLikeService.deleteLikes(videoId);
    }
    async deleteDisLikes(videoId) {
        return this.likeDisLikeService.deleteDisLikes(videoId);
    }
};
exports.LikeDislikeController = LikeDislikeController;
__decorate([
    (0, common_1.Get)("getLikedVideos/:userId"),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "getLikedVideos", null);
__decorate([
    (0, common_1.Get)("like/:userId/:videoId"),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "likeCheck", null);
__decorate([
    (0, common_1.Get)("disLike/:userId/:videoId"),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "disLikeCheck", null);
__decorate([
    (0, common_1.Post)("like"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dislike_dto_1.LikeAndDisLikeCreateDto]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "createLike", null);
__decorate([
    (0, common_1.Post)("disLike"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [like_dislike_dto_1.LikeAndDisLikeCreateDto]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "createDisLike", null);
__decorate([
    (0, common_1.Delete)("like/:likeId"),
    __param(0, (0, common_1.Param)("likeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "deleteLike", null);
__decorate([
    (0, common_1.Delete)("disLike/:disLikeId"),
    __param(0, (0, common_1.Param)("disLikeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "deleteDisLike", null);
__decorate([
    (0, common_1.Delete)("likes/:videoId"),
    __param(0, (0, common_1.Param)("videoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "deleteLikes", null);
__decorate([
    (0, common_1.Delete)("disLikes/:videoId"),
    __param(0, (0, common_1.Param)("videoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeDislikeController.prototype, "deleteDisLikes", null);
exports.LikeDislikeController = LikeDislikeController = __decorate([
    (0, common_1.Controller)('like_dislike'),
    __metadata("design:paramtypes", [like_dislike_service_1.LikeDislikeService])
], LikeDislikeController);
//# sourceMappingURL=like_dislike.controller.js.map