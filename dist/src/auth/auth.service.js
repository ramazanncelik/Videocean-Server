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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const hashText = process.env.HASH_TEXT;
let AuthService = class AuthService {
    constructor(userMongo) {
        this.userMongo = userMongo;
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            }
        });
    }
    async compareHashes(password, hashed) {
        const match = await bcrypt.compareSync(`${hashText}${password}`, hashed);
        return await match;
    }
    async convertToHash(value) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
            hashPwd = hash;
        });
        return await hashPwd;
    }
    async login(user) {
        try {
            const existUser = await this.userMongo.findOne({
                Email: user.Email
            }).exec();
            if (existUser) {
                let checkPwd;
                await this.compareHashes(user.Password, existUser.Password).then(response => {
                    if (response) {
                        checkPwd = true;
                    }
                    else {
                        checkPwd = false;
                    }
                });
                if (checkPwd) {
                    const authJsonWebToken = jwt.sign({ user: { _id: existUser._id } }, process.env.JWT_TEXT);
                    return await { success: true, authToken: authJsonWebToken };
                }
                else {
                    return await { success: false, isPasswordCorrect: false, isThereUser: true };
                }
            }
            else {
                return await { success: false, isPasswordCorrect: false, isThereUser: false };
            }
        }
        catch (error) {
            return await { success: false, response: "something went wrong while login process!", expection: error };
        }
    }
    async create(body) {
        body.Password = await this.convertToHash(body.Password);
        const emailExist = await this.userMongo.findOne({ Email: body.Email }).exec();
        const nickNameExist = await this.userMongo.findOne({ NickName: body.NickName }).exec();
        if (emailExist || nickNameExist) {
            return { success: false, emailExist: emailExist ? true : false, nickNameExist: nickNameExist ? true : false };
        }
        else {
            const user = new this.userMongo(body);
            const newUser = await user.save();
            if (newUser) {
                return { success: true, emailExist: false, nickNameExist: false };
            }
            else {
                return { success: false, emailExist: false, nickNameExist: false };
            }
        }
    }
    async getResetPasswordMail(data) {
        try {
            const existUser = await this.userMongo.findOne({
                Email: data.to
            }).exec();
            if (existUser) {
                const resetLink = `https://localhost:3000/auth/resetpassword?Email=${data.to}&ConfirmationCode=${existUser.ConfirmationCode}`;
                const html = `<p>Merhaba ${existUser.NickName},</p>
             <p>Şifrenizi sıfırlamak için aşağıdaki linke tıklayabilirsiniz:</p>
             <a href="${resetLink}">${resetLink}</a>`;
                await this.transporter.sendMail(Object.assign(Object.assign({ from: process.env.EMAIL }, data), { html: html }));
                return await { success: true, isThereUser: true };
            }
            else {
                return await { success: true, isThereUser: false };
            }
        }
        catch (error) {
            return await { success: false, response: "something went wrong while login process!", expection: error };
        }
    }
    async updatePassword(body) {
        body.Password = await this.convertToHash(body.Password);
        const userExist = await this.userMongo.findOne({ Email: body.Email, ConfirmationCode: body.ConfirmationCode }).exec();
        if (userExist) {
            await this.userMongo.findByIdAndUpdate(userExist._id, {
                Password: body.Password,
                ConfirmationCode: (Math.floor(Math.random() * 90000) + 10000).toString(),
            }, { new: true });
            return { success: true, userExist: true };
        }
        else {
            return { success: false, userExist: false };
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AuthService);
//# sourceMappingURL=auth.service.js.map