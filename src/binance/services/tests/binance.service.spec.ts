import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../binance.service';
import { ConfigModule } from '@nestjs/config';

describe('BinanceService', () => {
  let binanceService: BinanceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [BinanceService],
    }).compile();

    binanceService = app.get<BinanceService>(BinanceService);
  });

  describe('binanceService', () => {
    it('should be defined', () => {
      expect(binanceService).toBeDefined();
    });
  });
});
