import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SubmissionsService } from '../submissions/submissions.service';
import { FormsService } from '../forms/forms.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly submissionService: SubmissionsService,
    private readonly formsService: FormsService,
  ) {}

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
    let total = 0;
    let datesCounter = 0;
    items.forEach((item: any) => {
      const date = new Date(item.createdAt);
      const dateString = date.toISOString().slice(0, 10);
      total++;
      if (data[dateString]) {
        data[dateString]++;
      } else {
        data[dateString] = 1;
      }
    });
    for (const [key, value] of Object.entries(data)) {
      datesCounter++;
      submissionData.push({
        x: key,
        value: value,
      });
    }
    return {
      total: total,
      timeLine: [{ id: 'Envíos', data: submissionData }],
      average: total / datesCounter,
    };
  }

  async userActivity(userId: string) {
    const items = await this.submissionService.find({ userId });
    const submissionData = [];
    const pointsCoordinates = [];
    let totalPoints = 0;
    const data = {};
    const pointsData = {};
    let total = 0;
    let datesCounter = 0;
    items.forEach((item: any) => {
      const date = new Date(item.createdAt);
      const dateString = date.toISOString().slice(0, 10);
      total++;
      totalPoints += item.points;
      //Submissions
      if (data[dateString]) {
        data[dateString]++;
        pointsData[dateString] += item.points;
      } else {
        data[dateString] = 1;
        pointsData[dateString] = item.points;
      }
    });
    for (const [key, value] of Object.entries(data)) {
      datesCounter++;
      submissionData.push({
        x: key,
        value: value,
      });
    }
    for (const [key, value] of Object.entries(pointsData)) {
      pointsCoordinates.push({
        x: key,
        value: value,
      });
    }
    return {
      submissions: {
        total: total,
        average: total / datesCounter,
        data: [{ id: 'Envíos', data: submissionData }],
      },
      points: {
        total: totalPoints,
        average: totalPoints / datesCounter,
        points: [{ id: 'Puntos', data: pointsCoordinates }],
      },
    };
  }
}
