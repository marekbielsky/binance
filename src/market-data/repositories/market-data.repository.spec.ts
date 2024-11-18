import { MarketDataRepository } from './market-data.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketData, MarketDataSchema } from '../schemas/market-data.schema';

describe('MarketDataRepository', () => {
  let marketDataRepository: MarketDataRepository;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forFeature([
          { name: MarketData.name, schema: MarketDataSchema },
        ]),
      ],
      providers: [MarketDataRepository],
    }).compile();

    marketDataRepository = app.get<MarketDataRepository>(MarketDataRepository);
  });

  describe('test', () => {
    it('should be defined', () => {
      expect(marketDataRepository).toBeDefined();
    });
  });
});
