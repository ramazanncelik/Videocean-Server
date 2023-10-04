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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = process.env.HASH_TEXT;
let UserService = class UserService {
    constructor(userMongo) {
        this.userMongo = userMongo;
    }
    async convertToHash(value) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
            hashPwd = hash;
        });
        return await hashPwd;
    }
    async findById(user_id) {
        const user = await this.userMongo.findById(user_id).exec();
        return user;
    }
    async findAll() {
        const users = await this.userMongo.find().exec();
        return users;
    }
    async searchUser(searchText) {
        const users = await this.userMongo.find({ NickName: { $regex: searchText, $options: 'i' } }).exec();
        if (users) {
            return { success: true, result: users };
        }
        else {
            return { success: false, result: [] };
        }
    }
    async update(user_id, body) {
        if (body.Password) {
            body.Password = await this.convertToHash(body.Password);
        }
        const updatedUser = await this.userMongo.findByIdAndUpdate(user_id, body, { new: true }).exec();
        if (updatedUser) {
            return true;
        }
        else {
            return false;
        }
    }
    async delete(user_id) {
        const deletedUser = await this.userMongo.findByIdAndDelete(user_id).exec();
        if (deletedUser) {
            return true;
        }
        else {
            return false;
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UserService);
//# sourceMappingURL=user.service.js.map