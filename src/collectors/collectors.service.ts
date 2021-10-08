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

  findAll() {
    return this.collectorModel.find().exec();
    //return `This action returns all collectors`;
  }

  async findOne(id: string, authToken: string) {
    console.log(
      'Access to colelctor with token: ',
      authToken,
      typeof authToken,
    );
    //return `This action returns a #${id} collector`;
    const form = await this.formsService.findOne(id);
    const collector = (await this.collectorModel
      .find({ formId: id })
      .exec()) as any;
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
