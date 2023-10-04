"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintSchema = exports.ComplaintModel = void 0;
const mongoose_1 = require("mongoose");
class ComplaintModel {
}
exports.ComplaintModel = ComplaintModel;
exports.ComplaintSchema = new mongoose_1.default.Schema({
    OwnerId: {
        type: String,
        require: true
    },
    VideoId: {
        type: String,
        require: true
    },
    Title: {
        type: String,
        require: true
    },
    Description: {
        type: String,
        require: true
    },
    Date: {
        type: String,
        require: true
    },
});
//# sourceMappingURL=complaint.model.js.map