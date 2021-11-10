import { Module } from '@nestjs/common';
import { MetaDataService } from './meta-data.service';
import { MetaDataController } from './meta-data.controller';

@Module({
  controllers: [MetaDataController],
  providers: [MetaDataService]
})
export class MetaDataModule {}
