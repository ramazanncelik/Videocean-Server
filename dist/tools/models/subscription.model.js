"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionSchema = exports.SubscriptionModel = void 0;
const mongoose_1 = require("mongoose");
class SubscriptionModel {
}
exports.SubscriptionModel = SubscriptionModel;
exports.SubscriptionSchema = new mongoose_1.default.Schema({
    From: {
        type: String,
        require: true
    },
    To: {
        type: String,
        require: true
    },
});
//# sourceMappingURL=subscription.model.js.map