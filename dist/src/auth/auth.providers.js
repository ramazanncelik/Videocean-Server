"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authProviders = void 0;
const user_model_1 = require("../../tools/models/user.model");
exports.authProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_model_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=auth.providers.js.map