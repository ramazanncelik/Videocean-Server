"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProviders = void 0;
const user_model_1 = require("../../tools/models/user.model");
exports.usersProviders = [
    {
        provide: 'USER_MODEL',
        useFactory: (connection) => connection.model('User', user_model_1.UserSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=user.providers.js.map