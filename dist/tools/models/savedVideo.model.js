"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedVideoSchema = exports.SavedVideoModel = void 0;
const mongoose_1 = require("mongoose");
class SavedVideoModel {
}
exports.SavedVideoModel = SavedVideoModel;
exports.SavedVideoSchema = new mongoose_1.default.Schema({
    UserId: {
        type: String,
        require: true
    },
    VideoId: {
        type: String,
        require: true
    },
    Date: {
        type: String,
        require: true
    },
});
//# sourceMappingURL=savedVideo.model.js.map