import { Inject, Injectable, Req } from '@nestjs/common';
import { CreateCollectorDto } from './dto/create-collector.dto';
import { UpdateCollectorDto } from './dto/update-collector.dto';
import {
  Collector,
  CollectorDocument,
  CollectorSchema,
} from './schemas/collector.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FormsService } from '../forms/forms.service';

@Injectable()
export class CollectorsService {
  constructor(
    @InjectModel(Collector.name)
    private collectorModel: Model<CollectorDocument>,
    private readonly formsService: FormsService,
  ) {}

  create(createCollectorDto: CreateCollectorDto) {
    const entity = new this.collectorModel(createCollectorDto);
    entity.save();
    return entity;
  }

  async findAll(page: number, limit: number) {
    const items = await this.collectorModel
      .find()
      .skip(limit * (page - 1)) // we will not retrieve all records, but will skip first 'n' records
      .limit(limit) // will limit/restrict the number of records to display
      .exec();
    const totalDocuments = await this.collectorModel.countDocuments();
    for (let i = 0; i < items.length; i++) {
      const form = await this.formsService.findOne(
        items[i].formId,
      );
      items[i].form = form;
    }
    const res = { totalDocuments, items, page, limit };
    return res;
  }

  async findOne(id: string, authToken: string) {
    console.log(
      'Access to colelctor with token: ',
      authToken,
      typeof authToken,
    );
    //return `This action returns a #${id} collector`;
    const collector = (await this.collectorModel
      .find({ _id: id })
      .exec()) as any;
    const form = await this.formsService.findOne(collector[0].formId);
    console.log('authToken', authToken, !authToken);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (!collector[0].public && !authToken) {
      throw new Error('Form is private and not auth token provided.');
    }
    return { collector: collector, form };
  }

  update(id: number, updateCollectorDto: UpdateCollectorDto) {
    return `This action updates a #${id} collector`;
  }

  remove(id: number) {
    return `This action removes a #${id} collector`;
  }
}
