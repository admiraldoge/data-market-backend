import { Injectable } from '@nestjs/common';
import { CreateSubmissionDto } from './dto/create-submission.dto';
import { UpdateSubmissionDto } from './dto/update-submission.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Submission, SubmissionDocument } from './schemas/submission.schema';
import { Model } from 'mongoose';
import { FormsService } from '../forms/forms.service';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectModel(Submission.name)
    private submissionModel: Model<SubmissionDocument>,
    private readonly formsService: FormsService,
  ) {}

  create(createSubmissionDto: CreateSubmissionDto) {
    console.log('Creating submission: ', createSubmissionDto);
    const entity = new this.submissionModel(createSubmissionDto);
    entity.save();
    return entity;
  }

  async findAll(page: number, limit: number) {
    const items = await this.submissionModel
      .find()
      .skip(limit * (page - 1)) // we will not retrieve all records, but will skip first 'n' records
      .limit(limit) // will limit/restrict the number of records to display
      .exec();
    const totalDocuments = await this.submissionModel.countDocuments();
    for (let i = 0; i < items.length; i++) {
      const form = await this.formsService.findOne(
        items[i].formId,
      );
      items[i].form = form;
    }
    const res = { totalDocuments, items, page, limit };
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} submission`;
  }

  update(id: number, updateSubmissionDto: UpdateSubmissionDto) {
    return `This action updates a #${id} submission`;
  }

  remove(id: number) {
    return `This action removes a #${id} submission`;
  }
}
