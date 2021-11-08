import { Injectable } from '@nestjs/common';
import { CreateCsvReportDto } from './dto/create-csv-report.dto';
import { UpdateCsvReportDto } from './dto/update-csv-report.dto';

@Injectable()
export class CsvReportsService {
  create(createCsvReportDto: CreateCsvReportDto) {
    return 'This action adds a new csvReport';
  }

  findAll() {
    return `This action returns all csvReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} csvReport`;
  }

  update(id: number, updateCsvReportDto: UpdateCsvReportDto) {
    return `This action updates a #${id} csvReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} csvReport`;
  }
}
