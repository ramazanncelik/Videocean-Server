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
exports.ComplaintController = void 0;
const common_1 = require("@nestjs/common");
const complaint_service_1 = require("./complaint.service");
const complaint_dto_1 = require("../../tools/dtos/complaint.dto");
let ComplaintController = class ComplaintController {
    constructor(complaintService) {
        this.complaintService = complaintService;
    }
    async getComplaints() {
        return this.complaintService.findAll();
    }
    async create(body) {
        return this.complaintService.create(body);
    }
    async delete(complaint_id) {
        return this.complaintService.delete(complaint_id);
    }
    async deleteVideoComplaints(videoId) {
        return this.complaintService.deleteVideoComplaints(videoId);
    }
};
exports.ComplaintController = ComplaintController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "getComplaints", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [complaint_dto_1.ComplaintCreateDto]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "delete", null);
__decorate([
    (0, common_1.Delete)("videoComplaints/:videoId"),
    __param(0, (0, common_1.Param)('videoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ComplaintController.prototype, "deleteVideoComplaints", null);
exports.ComplaintController = ComplaintController = __decorate([
    (0, common_1.Controller)('complaint'),
    __metadata("design:paramtypes", [complaint_service_1.ComplaintService])
], ComplaintController);
//# sourceMappingURL=complaint.controller.js.map