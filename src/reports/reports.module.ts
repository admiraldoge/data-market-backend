import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { SubmissionsModule } from '../submissions/submissions.module';
import { FormsService } from '../forms/forms.service';
import { FormsModule } from '../forms/forms.module';

@Module({
  imports: [SubmissionsModule, FormsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
