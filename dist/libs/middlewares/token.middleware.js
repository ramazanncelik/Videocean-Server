"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let TokenMiddleware = class TokenMiddleware {
    use(req, res, next) {
        const authJsonWebToken = req.headers.authorization;
        if (!req.url.includes("/auth/") && !req.url.includes("/video") && !req.url.includes("/user/") && !req.url.includes("/comment")) {
            if (!authJsonWebToken) {
                throw new common_1.HttpException('Jwt count not found!', common_1.HttpStatus.FORBIDDEN);
            }
            else {
                try {
                    const user = jwt.verify(authJsonWebToken.slice(7), process.env.JWT_TEXT);
                    if (user) {
                        req['user'] = user;
                        next();
                    }
                    else {
                        throw new common_1.HttpException('Something went wrong!', common_1.HttpStatus.GATEWAY_TIMEOUT);
                    }
                }
                catch (error) {
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.UNAUTHORIZED);
                }
            }
        }
        else {
            next();
        }
    }
};
exports.TokenMiddleware = TokenMiddleware;
exports.TokenMiddleware = TokenMiddleware = __decorate([
    (0, common_1.Injectable)()
], TokenMiddleware);
//# sourceMappingURL=token.middleware.js.map