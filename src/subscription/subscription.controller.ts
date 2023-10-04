import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionModel } from 'tools/models/subscription.model';
import { SubscriptionCreateDto } from 'tools/dtos/subscription.dto';

@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionService: SubscriptionService) { }


    @Get(":id")
    async getSubscription(@Param('id') id: string): Promise<SubscriptionModel> {
        return this.subscriptionService.findById(id);
    }

    @Get("subscriptionCheck/:fromId/:toId")
    async subscriptionCheck(@Param('fromId') fromId: string, @Param('toId') toId: string): Promise<any> {
        return this.subscriptionService.subscriptionCheck(fromId, toId);
    }

    @Get("userSubscribers/:id")
    async getUserSubscribers(@Param('id') id: string): Promise<SubscriptionModel[]> {
        return this.subscriptionService.getUserSubscribers(id);
    }

    @Get("userSubscriptions/:id")
    async getUserSubscriptions(@Param('id') id: string): Promise<SubscriptionModel[]> {
        return this.subscriptionService.getUserSubscriptions(id);
    }

    @Post()
    async createSubscription(@Body() body: SubscriptionCreateDto): Promise<any> {
        return this.subscriptionService.create(body);
    }
 
    @Delete(":id")
    async deleteSubscription(@Param('id') id: string): Promise<any> {
        return this.subscriptionService.delete(id);
    }
}
