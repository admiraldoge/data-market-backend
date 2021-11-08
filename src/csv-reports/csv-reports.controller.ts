import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CsvReportsService } from './csv-reports.service';
import { CreateCsvReportDto } from './dto/create-csv-report.dto';
import { UpdateCsvReportDto } from './dto/update-csv-report.dto';

@Controller('csv-reports')
export class CsvReportsController {
  constructor(private readonly csvReportsService: CsvReportsService) {}

  @Post()
  create(@Body() createCsvReportDto: CreateCsvReportDto) {
    return this.csvReportsService.create(createCsvReportDto);
  }

  @Get()
  findAll() {
    return this.csvReportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.csvReportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCsvReportDto: UpdateCsvReportDto) {
    return this.csvReportsService.update(+id, updateCsvReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.csvReportsService.remove(+id);
  }
}
