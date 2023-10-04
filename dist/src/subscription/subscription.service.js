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
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let SubscriptionService = class SubscriptionService {
    constructor(subscriptionMongo, userMongo) {
        this.subscriptionMongo = subscriptionMongo;
        this.userMongo = userMongo;
    }
    async findById(subscription_id) {
        const subscription = await this.subscriptionMongo.findById(subscription_id).exec();
        console.log(subscription);
        return subscription;
    }
    async subscriptionCheck(fromId, toId) {
        const subscription = await this.subscriptionMongo.findOne({ From: fromId, To: toId }).exec();
        if (subscription) {
            return { success: true, subscription_id: subscription._id };
        }
        else {
            return { success: false, subscription_id: null };
        }
    }
    async getUserSubscribers(user_id) {
        const subscribers = await this.subscriptionMongo.find({ To: user_id }).exec();
        return subscribers;
    }
    async getUserSubscriptions(user_id) {
        const subscriptions = await this.subscriptionMongo.find({ From: user_id }).exec();
        return subscriptions;
    }
    async create(body) {
        const toUser = await this.userMongo.findById(body.To);
        const newSubscription = new this.subscriptionMongo(body);
        const subscriptionCreated = await newSubscription.save();
        if (subscriptionCreated) {
            await this.userMongo.findByIdAndUpdate(toUser._id, { SubscriberCount: toUser.SubscriberCount + 1 }, { new: true }).exec();
            return true;
        }
        else {
            return false;
        }
    }
    async delete(subscription_id) {
        const subscription = await this.subscriptionMongo.findById(subscription_id).exec();
        const toUser = await this.userMongo.findById(subscription.To);
        const updatedUser = await this.userMongo.findByIdAndUpdate(toUser._id, { SubscriberCount: toUser.SubscriberCount - 1 }, { new: true }).exec();
        if (updatedUser) {
            const deletedSubscription = this.subscriptionMongo.findByIdAndDelete(subscription_id).exec();
            if (deletedSubscription) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
};
exports.SubscriptionService = SubscriptionService;
exports.SubscriptionService = SubscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('SUBSCRIPTION_MODEL')),
    __param(1, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map