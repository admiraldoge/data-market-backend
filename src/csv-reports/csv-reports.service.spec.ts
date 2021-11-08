import { Test, TestingModule } from '@nestjs/testing';
import { CsvReportsService } from './csv-reports.service';

describe('CsvReportsService', () => {
  let service: CsvReportsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CsvReportsService],
    }).compile();

    service = module.get<CsvReportsService>(CsvReportsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
