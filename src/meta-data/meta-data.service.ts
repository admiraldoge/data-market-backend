import { Injectable } from '@nestjs/common';
import { CreateMetaDatumDto } from './dto/create-meta-datum.dto';
import { UpdateMetaDatumDto } from './dto/update-meta-datum.dto';

@Injectable()
export class MetaDataService {
  create(createMetaDatumDto: CreateMetaDatumDto) {
    return 'This action adds a new metaDatum';
  }

  findAll() {
    return `This action returns all metaData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} metaDatum`;
  }

  update(id: number, updateMetaDatumDto: UpdateMetaDatumDto) {
    return `This action updates a #${id} metaDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} metaDatum`;
  }
}
