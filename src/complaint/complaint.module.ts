import { Module } from '@nestjs/common';
import { DatabaseModule } from 'tools/database/database.module';
import { complaintsProviders } from './complaint.providers';
import { ComplaintService } from './complaint.service';
import { ComplaintController } from './complaint.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ComplaintController],
  providers: [
    ComplaintService,
    ...complaintsProviders
  ],
})
export class ComplaintModule { }
