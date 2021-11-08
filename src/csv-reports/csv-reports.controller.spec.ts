import { Test, TestingModule } from '@nestjs/testing';
import { CsvReportsController } from './csv-reports.controller';
import { CsvReportsService } from './csv-reports.service';

describe('CsvReportsController', () => {
  let controller: CsvReportsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvReportsController],
      providers: [CsvReportsService],
    }).compile();

    controller = module.get<CsvReportsController>(CsvReportsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
