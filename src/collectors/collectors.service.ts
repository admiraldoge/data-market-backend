import { Injectable } from '@nestjs/common';
import { CreateCollectorDto } from './dto/create-collector.dto';
import { UpdateCollectorDto } from './dto/update-collector.dto';
import {
  Collector,
  CollectorDocument,
  CollectorSchema,
} from './schemas/collector.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CollectorsService {

  constructor(@InjectModel(Collector.name) private collectorModel: Model<CollectorDocument>) {}

  create(createCollectorDto: CreateCollectorDto) {
    const entity = new this.collectorModel(createCollectorDto);
    entity.save();
    return 'This action adds a new collector';
  }

  findAll() {
    return `This action returns all collectors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} collector`;
  }

  update(id: number, updateCollectorDto: UpdateCollectorDto) {
    return `This action updates a #${id} collector`;
  }

  remove(id: number) {
    return `This action removes a #${id} collector`;
  }
}
