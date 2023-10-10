import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { UserCreateDto, UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
import *as jwt from 'jsonwebtoken'
import *as nodemailer from 'nodemailer';
const bcrypt = require('bcrypt');

const saltRounds = 10;
const hashText = process.env.HASH_TEXT;

@Injectable()
export class AuthService {

    private transporter: nodemailer.Transporter;

    constructor(
        @Inject('USER_MODEL')
        private userMongo: Model<UserModel>,
    ) {
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

    async convertToHash(value: string) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
            hashPwd = hash;
        });

        return await hashPwd;
    }

    async login(user: UserLoginDto): Promise<any> {
        try {
            const existUser = await this.userMongo.findOne({
                Email: user.Email
            }).exec();
            if (existUser) {
                let checkPwd;
                await this.compareHashes(user.Password, existUser.Password).then(response => {
                    if (response) {
                        checkPwd = true;
                    } else {
                        checkPwd = false;
                    }
                });

                if (checkPwd) {
                    const authJsonWebToken = jwt.sign({ user: { _id: existUser._id } }, process.env.JWT_TEXT);
                    return await { success: true, authToken: authJsonWebToken };
                } else {
                    return await { success: false, isPasswordCorrect: false, isThereUser: true };
                }
            } else {
                return await { success: false, isPasswordCorrect: false, isThereUser: false };
            }
        } catch (error) {
            return await { success: false, response: "something went wrong while login process!", expection: error };
        }
    }

    async create(body: UserCreateDto): Promise<Object> {
        body.Password = await this.convertToHash(body.Password);

        const emailExist = await this.userMongo.findOne({ Email: body.Email }).exec();
        const nickNameExist = await this.userMongo.findOne({ NickName: body.NickName }).exec();
        if (emailExist || nickNameExist) {
            return { success: false, emailExist: emailExist ? true : false, nickNameExist: nickNameExist ? true : false }
        } else {
            const user = new this.userMongo(body);
            const newUser = await user.save();
            if (newUser) {
                return { success: true, emailExist: false, nickNameExist: false }
            } else {
                return { success: false, emailExist: false, nickNameExist: false }
            }
        }

    }

    async getResetPasswordMail(data: any): Promise<Object> {
        try {
            const existUser = await this.userMongo.findOne({
                Email: data.to
            }).exec();
            if (existUser) {
                const resetLink = `https://videocean-server.adaptable.app/auth/resetpassword?Email=${data.to}&ConfirmationCode=${existUser.ConfirmationCode}`;

                const html = `<p>Merhaba ${existUser.NickName},</p>
             <p>Şifrenizi sıfırlamak için aşağıdaki linke tıklayabilirsiniz:</p>
             <a href="${resetLink}">${resetLink}</a>`;
                await this.transporter.sendMail({
                    from: process.env.EMAIL,
                    ...data,
                    html: html
                });
                return await { success: true, isThereUser: true };
            } else {
                return await { success: true, isThereUser: false };
            }
        } catch (error) {
            return await { success: false, response: "something went wrong while login process!", expection: error };
        }
    }

    async getEmailVerifyMail(data: any): Promise<Boolean> {
        try {
            const existUser = await this.userMongo.findOne({
                Email: data.to
            }).exec();
            if (existUser) {
                const emailVerifyLink = `http://localhost:3000/auth/emailverify?Email=${data.to}&ConfirmationCode=${existUser.ConfirmationCode}`;

                const html = `<p>Hi ${existUser.NickName},</p>
             <p>${data.text}:</p>
             <a href="${emailVerifyLink}">${emailVerifyLink}</a>`;
                await this.transporter.sendMail({
                    from: process.env.EMAIL,
                    ...data,
                    html: html
                });
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false
        }
    }

    async updatePassword(body: any): Promise<Object> {
        body.Password = await this.convertToHash(body.Password);

        const userExist = await this.userMongo.findOne({ Email: body.Email, ConfirmationCode: body.ConfirmationCode }).exec();
        if (userExist) {
            await this.userMongo.findByIdAndUpdate(
                userExist._id,
                {
                    Password: body.Password,
                    ConfirmationCode: (Math.floor(Math.random() * 90000) + 10000).toString(),
                },
                { new: true });
            return { success: true, userExist: true }
        } else {
            return { success: false, userExist: false }
        }
    }

    async updateEmailVerify(body: any): Promise<Object> {
        const userExist = await this.userMongo.findOne({ Email: body.Email, ConfirmationCode: body.ConfirmationCode }).exec();
        if (userExist) {
            await this.userMongo.findByIdAndUpdate(
                userExist._id,
                {
                    EmailVerify: true,
                    ConfirmationCode: (Math.floor(Math.random() * 90000) + 10000).toString(),
                },
                { new: true });
            return { success: true, userExist: true }
        } else {
            return { success: false, userExist: false }
        }
    }

}
