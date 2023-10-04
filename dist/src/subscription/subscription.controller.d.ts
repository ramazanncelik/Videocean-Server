import { SubscriptionService } from './subscription.service';
import { SubscriptionModel } from 'tools/models/subscription.model';
import { SubscriptionCreateDto } from 'tools/dtos/subscription.dto';
export declare class SubscriptionController {
    private subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    getSubscription(id: string): Promise<SubscriptionModel>;
    subscriptionCheck(fromId: string, toId: string): Promise<any>;
    getUserSubscribers(id: string): Promise<SubscriptionModel[]>;
    getUserSubscriptions(id: string): Promise<SubscriptionModel[]>;
    createSubscription(body: SubscriptionCreateDto): Promise<any>;
    deleteSubscription(id: string): Promise<any>;
}
