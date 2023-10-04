"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LikeDislikeModule = void 0;
const common_1 = require("@nestjs/common");
const like_dislike_providers_1 = require("./like_dislike.providers");
const database_module_1 = require("../../tools/database/database.module");
const like_dislike_controller_1 = require("./like_dislike.controller");
const like_dislike_service_1 = require("./like_dislike.service");
let LikeDislikeModule = class LikeDislikeModule {
};
exports.LikeDislikeModule = LikeDislikeModule;
exports.LikeDislikeModule = LikeDislikeModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [like_dislike_controller_1.LikeDislikeController],
        providers: [
            like_dislike_service_1.LikeDislikeService,
            ...like_dislike_providers_1.likes_dislikes_Providers
        ],
    })
], LikeDislikeModule);
//# sourceMappingURL=like_dislike.module.js.map