"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complaintsProviders = void 0;
const complaint_model_1 = require("../../tools/models/complaint.model");
exports.complaintsProviders = [
    {
        provide: 'COMPLAINT_MODEL',
        useFactory: (connection) => connection.model('Complaint', complaint_model_1.ComplaintSchema),
        inject: ['DATABASE_CONNECTION'],
    }
];
//# sourceMappingURL=complaint.providers.js.map