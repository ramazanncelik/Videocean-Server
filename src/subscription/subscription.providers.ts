import { Connection } from 'mongoose';
import { SubscriptionSchema } from 'tools/models/subscription.model';
import { UserSchema } from 'tools/models/user.model';

export const subscriptionsProviders = [
  {
    provide: 'SUBSCRIPTION_MODEL',
    useFactory: (connection: Connection) => connection.model('Subscription', SubscriptionSchema),
    inject: ['DATABASE_CONNECTION'],
  },{
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];