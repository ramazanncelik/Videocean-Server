"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ComplaintService = class ComplaintService {
    constructor(complaintMongo) {
        this.complaintMongo = complaintMongo;
    }
    async findAll() {
        const complaints = await this.complaintMongo.find().exec();
        return complaints;
    }
    async create(body) {
        const newComplaint = new this.complaintMongo(body);
        const createdComplaint = await newComplaint.save();
        if (createdComplaint) {
            return true;
        }
        else {
            return false;
        }
    }
    async delete(complaint_id) {
        const deletedComplaint = await this.complaintMongo.findByIdAndDelete(complaint_id).exec();
        if (deletedComplaint) {
            return true;
        }
        else {
            return false;
        }
    }
    async deleteVideoComplaints(videoId) {
        const complaints = await this.complaintMongo.find({ VideoId: videoId }).exec();
        if (complaints) {
            if (complaints.length !== 0) {
                for (let i = 0; i < complaints.length; i++) {
                    await this.complaintMongo.findByIdAndDelete(complaints[i]._id);
                    if (i + 1 === complaints.length) {
                        return true;
                    }
                }
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    }
};
exports.ComplaintService = ComplaintService;
exports.ComplaintService = ComplaintService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('COMPLAINT_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ComplaintService);
//# sourceMappingURL=complaint.service.js.map