import { Model } from 'mongoose';
import { SubscriptionCreateDto } from 'tools/dtos/subscription.dto';
import { SubscriptionModel } from 'tools/models/subscription.model';
import { UserModel } from 'tools/models/user.model';
export declare class SubscriptionService {
    private subscriptionMongo;
    private userMongo;
    constructor(subscriptionMongo: Model<SubscriptionModel>, userMongo: Model<UserModel>);
    findById(subscription_id: string): Promise<SubscriptionModel>;
    subscriptionCheck(fromId: string, toId: string): Promise<any>;
    getUserSubscribers(user_id: string): Promise<SubscriptionModel[]>;
    getUserSubscriptions(user_id: string): Promise<SubscriptionModel[]>;
    create(body: SubscriptionCreateDto): Promise<boolean>;
    delete(subscription_id: string): Promise<boolean>;
}
