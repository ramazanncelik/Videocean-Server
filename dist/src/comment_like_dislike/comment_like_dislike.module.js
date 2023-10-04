"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentLikeDislikeModule = void 0;
const common_1 = require("@nestjs/common");
const comment_like_dislike_providers_1 = require("./comment_like_dislike.providers");
const database_module_1 = require("../../tools/database/database.module");
const comment_like_dislike_service_1 = require("./comment_like_dislike.service");
const comment_like_dislike_controller_1 = require("./comment_like_dislike.controller");
let CommentLikeDislikeModule = class CommentLikeDislikeModule {
};
exports.CommentLikeDislikeModule = CommentLikeDislikeModule;
exports.CommentLikeDislikeModule = CommentLikeDislikeModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [comment_like_dislike_controller_1.CommentLikeDislikeController],
        providers: [
            comment_like_dislike_service_1.CommentLikeDislikeService,
            ...comment_like_dislike_providers_1.comment_likes_dislikes_Providers
        ],
    })
], CommentLikeDislikeModule);
//# sourceMappingURL=comment_like_dislike.module.js.map