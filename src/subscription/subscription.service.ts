import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { SubscriptionCreateDto } from 'tools/dtos/subscription.dto';
import { SubscriptionModel } from 'tools/models/subscription.model';
import { UserModel } from 'tools/models/user.model';

@Injectable()
export class SubscriptionService {
  constructor(
    @Inject('SUBSCRIPTION_MODEL')
    private subscriptionMongo: Model<SubscriptionModel>,
    @Inject('USER_MODEL')
    private userMongo: Model<UserModel>,
  ) { }

  async findById(subscription_id: string): Promise<SubscriptionModel> {
    const subscription = await this.subscriptionMongo.findById(subscription_id).exec();
    console.log(subscription)
    return subscription;
  }

  async subscriptionCheck(fromId: string, toId: string): Promise<any> {
    const subscription = await this.subscriptionMongo.findOne({ From: fromId, To: toId }).exec();
    if (subscription) {
      return { success: true, subscription_id: subscription._id };
    } else {
      return { success: false, subscription_id: null };
    }
  }

  async getUserSubscribers(user_id: string): Promise<SubscriptionModel[]> {
    const subscribers = await this.subscriptionMongo.find({ To: user_id }).exec();
    return subscribers;
  }

  async getUserSubscriptions(user_id: string): Promise<SubscriptionModel[]> {
    const subscriptions = await this.subscriptionMongo.find({ From: user_id }).exec();
    return subscriptions;
  }

  async create(body: SubscriptionCreateDto): Promise<boolean> {
    const toUser = await this.userMongo.findById(body.To);
    const newSubscription = new this.subscriptionMongo(body);
    const subscriptionCreated = await newSubscription.save();
    if (subscriptionCreated) {
      await this.userMongo.findByIdAndUpdate(toUser._id, { SubscriberCount: toUser.SubscriberCount + 1 }, { new: true }).exec();
      return true;
    } else {
      return false;
    }
  }

  async delete(subscription_id: string): Promise<boolean> {
    const subscription = await this.subscriptionMongo.findById(subscription_id).exec();
    const toUser = await this.userMongo.findById(subscription.To);
    const updatedUser = await this.userMongo.findByIdAndUpdate(toUser._id, { SubscriberCount: toUser.SubscriberCount - 1 }, { new: true }).exec();
    if (updatedUser) {
      const deletedSubscription = this.subscriptionMongo.findByIdAndDelete(subscription_id).exec();
      if (deletedSubscription) {
        return true;
      } else {
        return false;
      }
    } else {
      return false; 
    }
  }

}
