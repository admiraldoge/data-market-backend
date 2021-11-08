import { Module } from '@nestjs/common';
import { CsvReportsService } from './csv-reports.service';
import { CsvReportsController } from './csv-reports.controller';

@Module({
  controllers: [CsvReportsController],
  providers: [CsvReportsService]
})
export class CsvReportsModule {}
