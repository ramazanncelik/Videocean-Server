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
exports.SavedVideoController = void 0;
const common_1 = require("@nestjs/common");
const savedvideo_service_1 = require("./savedvideo.service");
const savedVideo_dto_1 = require("../../tools/dtos/savedVideo.dto");
let SavedVideoController = class SavedVideoController {
    constructor(savedVideoService) {
        this.savedVideoService = savedVideoService;
    }
    async getSavedVideos(user_id) {
        return this.savedVideoService.findAll(user_id);
    }
    async checkSavedVideo(user_id, video_id) {
        return this.savedVideoService.findOne({
            UserId: user_id,
            VideoId: video_id
        });
    }
    async create(body) {
        return this.savedVideoService.create(body);
    }
    async delete(savedVideo_id) {
        return this.savedVideoService.delete(savedVideo_id);
    }
    async deleteVideoSaveds(videoId) {
        return this.savedVideoService.deleteVideoSaveds(videoId);
    }
};
exports.SavedVideoController = SavedVideoController;
__decorate([
    (0, common_1.Get)("all/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavedVideoController.prototype, "getSavedVideos", null);
__decorate([
    (0, common_1.Get)("check/:userId/:videoId"),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SavedVideoController.prototype, "checkSavedVideo", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [savedVideo_dto_1.SavedVideoCreateDto]),
    __metadata("design:returntype", Promise)
], SavedVideoController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavedVideoController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)("videoSaveds/:videoId"),
    __param(0, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SavedVideoController.prototype, "deleteVideoSaveds", null);
exports.SavedVideoController = SavedVideoController = __decorate([
    (0, common_1.Controller)('savedvideo'),
    __metadata("design:paramtypes", [savedvideo_service_1.SavedVideoService])
], SavedVideoController);
//# sourceMappingURL=savedvideo.controller.js.map