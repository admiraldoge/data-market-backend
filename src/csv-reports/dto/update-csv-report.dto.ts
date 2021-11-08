import { PartialType } from '@nestjs/swagger';
import { CreateCsvReportDto } from './create-csv-report.dto';

export class UpdateCsvReportDto extends PartialType(CreateCsvReportDto) {}
