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
exports.CommentLikeDislikeController = void 0;
const common_1 = require("@nestjs/common");
const comment_like_dislike_service_1 = require("./comment_like_dislike.service");
const comment_like_dislike_dto_1 = require("../../tools/dtos/comment_like_dislike.dto");
let CommentLikeDislikeController = class CommentLikeDislikeController {
    constructor(likeDisLikeService) {
        this.likeDisLikeService = likeDisLikeService;
    }
    async likeCheck(userId, commentId) {
        return this.likeDisLikeService.likeCheck({
            UserId: userId,
            CommentId: commentId
        });
    }
    async disLikeCheck(userId, commentId) {
        return this.likeDisLikeService.disLikeCheck({
            UserId: userId,
            CommentId: commentId
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
    async deleteLikes(commentId) {
        return this.likeDisLikeService.deleteLikes(commentId);
    }
    async deleteDisLikes(commentId) {
        return this.likeDisLikeService.deleteDisLikes(commentId);
    }
};
exports.CommentLikeDislikeController = CommentLikeDislikeController;
__decorate([
    (0, common_1.Get)("like/:userId/:commentId"),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "likeCheck", null);
__decorate([
    (0, common_1.Get)("disLike/:userId/:commentId"),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('commentId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "disLikeCheck", null);
__decorate([
    (0, common_1.Post)("like"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_like_dislike_dto_1.CommentLikeAndDisLikeCreateDto]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "createLike", null);
__decorate([
    (0, common_1.Post)("disLike"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [comment_like_dislike_dto_1.CommentLikeAndDisLikeCreateDto]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "createDisLike", null);
__decorate([
    (0, common_1.Delete)("like/:likeId"),
    __param(0, (0, common_1.Param)("likeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "deleteLike", null);
__decorate([
    (0, common_1.Delete)("disLike/:disLikeId"),
    __param(0, (0, common_1.Param)("disLikeId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "deleteDisLike", null);
__decorate([
    (0, common_1.Delete)("likes/:commentId"),
    __param(0, (0, common_1.Param)("commentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "deleteLikes", null);
__decorate([
    (0, common_1.Delete)("disLikes/:commentId"),
    __param(0, (0, common_1.Param)("commentId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CommentLikeDislikeController.prototype, "deleteDisLikes", null);
exports.CommentLikeDislikeController = CommentLikeDislikeController = __decorate([
    (0, common_1.Controller)('comment_like_dislike'),
    __metadata("design:paramtypes", [comment_like_dislike_service_1.CommentLikeDislikeService])
], CommentLikeDislikeController);
//# sourceMappingURL=comment_like_dislike.controller.js.map