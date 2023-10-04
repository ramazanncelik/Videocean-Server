"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const database_module_1 = require("../tools/database/database.module");
const token_middleware_1 = require("../libs/middlewares/token.middleware");
const video_module_1 = require("./video/video.module");
const subscription_module_1 = require("./subscription/subscription.module");
const like_dislike_module_1 = require("./like_dislike/like_dislike.module");
const comment_module_1 = require("./comment/comment.module");
const comment_like_dislike_module_1 = require("./comment_like_dislike/comment_like_dislike.module");
const savedvideo_module_1 = require("./savedvideo/savedvideo.module");
const complaint_module_1 = require("./complaint/complaint.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(token_middleware_1.TokenMiddleware).forRoutes({ path: '*', method: common_1.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, user_module_1.UserModule, auth_module_1.AuthModule, video_module_1.VideoModule, subscription_module_1.SubscriptionModule, like_dislike_module_1.LikeDislikeModule, comment_module_1.CommentModule, comment_like_dislike_module_1.CommentLikeDislikeModule, savedvideo_module_1.SavedVideoModule, complaint_module_1.ComplaintModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map