"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplaintModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("../../tools/database/database.module");
const complaint_providers_1 = require("./complaint.providers");
const complaint_service_1 = require("./complaint.service");
const complaint_controller_1 = require("./complaint.controller");
let ComplaintModule = class ComplaintModule {
};
exports.ComplaintModule = ComplaintModule;
exports.ComplaintModule = ComplaintModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [complaint_controller_1.ComplaintController],
        providers: [
            complaint_service_1.ComplaintService,
            ...complaint_providers_1.complaintsProviders
        ],
    })
], ComplaintModule);
//# sourceMappingURL=complaint.module.js.map