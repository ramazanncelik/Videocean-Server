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
exports.SavedVideoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let SavedVideoService = class SavedVideoService {
    constructor(savedVideosMongo) {
        this.savedVideosMongo = savedVideosMongo;
    }
    async findAll(user_id) {
        const savedVideos = await this.savedVideosMongo.find({ UserId: user_id }).exec();
        return savedVideos;
    }
    async findOne(body) {
        const save = await this.savedVideosMongo.findOne(body);
        if (save) {
            return { success: true, result: save };
        }
        else {
            return { success: false, result: null };
        }
    }
    async create(body) {
        const newSavedVideo = new this.savedVideosMongo(body);
        const createdSavedVideo = await newSavedVideo.save();
        if (createdSavedVideo) {
            return true;
        }
        else {
            return false;
        }
    }
    async delete(savedVideo_id) {
        const deletedSavedVideo = await this.savedVideosMongo.findByIdAndDelete(savedVideo_id).exec();
        if (deletedSavedVideo) {
            return true;
        }
        else {
            return false;
        }
    }
    async deleteVideoSaveds(videoId) {
        const savedVideos = await this.savedVideosMongo.find({ VideoId: videoId }).exec();
        if (savedVideos) {
            if (savedVideos.length !== 0) {
                for (let i = 0; i < savedVideos.length; i++) {
                    await this.savedVideosMongo.findByIdAndDelete(savedVideos[i]._id);
                    if (i + 1 === savedVideos.length) {
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
exports.SavedVideoService = SavedVideoService;
exports.SavedVideoService = SavedVideoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SAVEDVIDEO_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], SavedVideoService);
//# sourceMappingURL=savedvideo.service.js.map