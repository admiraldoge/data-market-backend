import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import newBaseResponse from '../statics/baseResponse';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  create(@Body() createReportDto: CreateReportDto) {
    return this.reportsService.create(createReportDto);
  }

  @Get()
  findAll() {
    return this.reportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportDto: UpdateReportDto) {
    return this.reportsService.update(+id, updateReportDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportsService.remove(+id);
  }

  @Get('/collectors/:id/submissions')
  async getCollectorSubmission(@Param('id') id: string) {
    const baseResponse = newBaseResponse();
    try {
      baseResponse.data = await this.reportsService.collectorSubmissions(id);
    } catch (error) {
      baseResponse.success = false;
      baseResponse.message = error.toString();
    } finally {
      return baseResponse;
    }
  }
}
