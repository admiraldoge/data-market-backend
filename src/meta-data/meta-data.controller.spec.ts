import { Test, TestingModule } from '@nestjs/testing';
import { MetaDataController } from './meta-data.controller';
import { MetaDataService } from './meta-data.service';

describe('MetaDataController', () => {
  let controller: MetaDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetaDataController],
      providers: [MetaDataService],
    }).compile();

    controller = module.get<MetaDataController>(MetaDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
