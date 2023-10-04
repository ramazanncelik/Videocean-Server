import { Module } from '@nestjs/common';
import { SubscriptionController } from './subscription.controller';
import { SubscriptionService } from './subscription.service';
import { subscriptionsProviders } from './subscription.providers';
import { DatabaseModule } from 'tools/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SubscriptionController],
  providers: [
    SubscriptionService,
    ...subscriptionsProviders
  ],
})
export class SubscriptionModule {}
