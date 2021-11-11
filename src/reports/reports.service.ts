import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmissionsService } from '../submissions/submissions.service';

@Injectable()
export class ReportsService {
  constructor(private readonly submissionService: SubmissionsService) {}

  create(createReportDto: CreateReportDto) {
    return 'This action adds a new report';
  }

  findAll() {
    return `This action returns all reports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} report`;
  }

  update(id: number, updateReportDto: UpdateReportDto) {
    return `This action updates a #${id} report`;
  }

  remove(id: number) {
    return `This action removes a #${id} report`;
  }

  async collectorSubmissions(collectorId: string) {
    const items = await this.submissionService.find({ collectorId });
    const submissionData = [];
    const data = {};
    items.forEach((item: any) => {
      const date = new Date(item.createdAt);
      const dateString = date.toISOString().slice(0, 10);
      if (data[dateString]) {
        data[dateString]++;
      } else {
        data[dateString] = 1;
      }
    });
    for (const [key, value] of Object.entries(data)) {
      submissionData.push({
        x: key,
        value: value,
      });
    }
    return [{ id: 'Envíos', data: submissionData }];
  }
}
