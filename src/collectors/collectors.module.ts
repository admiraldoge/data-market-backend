import { Module } from '@nestjs/common';
import { CollectorsService } from './collectors.service';
import { CollectorsController } from './collectors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collector, CollectorSchema } from './schemas/collector.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collector.name, schema: CollectorSchema },
    ]),
  ],
  controllers: [CollectorsController],
  providers: [CollectorsService],
})
export class CollectorsModule {}
