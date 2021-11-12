import { Module } from '@nestjs/common';
import { CollectorsService } from './collectors.service';
import { CollectorsController } from './collectors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Collector, CollectorSchema } from './schemas/collector.schema';
import { FormsModule } from '../forms/forms.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collector.name, schema: CollectorSchema },
    ]),
    FormsModule,
  ],
  controllers: [CollectorsController],
  providers: [CollectorsService],
  exports: [CollectorsService],
})
export class CollectorsModule {}
