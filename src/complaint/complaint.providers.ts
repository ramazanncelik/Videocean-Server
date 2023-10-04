import { Connection } from 'mongoose';
import { ComplaintSchema } from 'tools/models/complaint.model';

export const complaintsProviders = [
  {
    provide: 'COMPLAINT_MODEL',
    useFactory: (connection: Connection) => connection.model('Complaint', ComplaintSchema),
    inject: ['DATABASE_CONNECTION'],
  }
];