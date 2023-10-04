"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
class UserModel {
}
exports.UserModel = UserModel;
exports.UserSchema = new mongoose_1.default.Schema({
    Email: {
        type: String,
        require: true
    },
    Password: {
        type: String,
        require: true
    },
    NickName: {
        type: String,
        require: true
    },
    FullName: {
        type: String,
        require: true
    },
    Biography: {
        type: String,
        require: true
    },
    ImageUrl: {
        type: String,
        require: true
    },
    SubscriberCount: {
        type: Number,
        require: true
    },
    VideoCount: {
        type: Number,
        require: true
    },
    ConfirmationCode: {
        type: String,
        require: true
    },
    Role: {
        type: String,
        require: true
    },
    UsageAgreement: {
        type: Boolean,
        require: true
    },
    EmailVerify: {
        type: Boolean,
        require: true
    },
});
//# sourceMappingURL=user.model.js.map