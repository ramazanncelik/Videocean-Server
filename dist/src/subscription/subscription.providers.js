"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscriptionsProviders = void 0;
const subscription_model_1 = require("../../tools/models/subscription.model");
const user_model_1 = require("../../tools/models/user.model");
exports.subscriptionsProviders = [
    {
        provide: 'SUBSCRIPTION_MODEL',
        useFactory: (connection) => connection.model('Subscription', subscription_model_1.SubscriptionSchema),
        inject: ['DATABASE_CONNECTION'],
    }, {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_model_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=subscription.providers.js.map