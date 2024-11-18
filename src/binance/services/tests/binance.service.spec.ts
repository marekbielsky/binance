import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../binance.service';
import { ConfigModule } from '@nestjs/config';
import { BinanceExerciseHistoryDTO } from '../../dtos/binance.dto';
import { BinanceSymbol } from '../types/binance.types';
import { now, yesterday } from '../../../common/utils/date.util';
import { BinanceMockFactory } from '../../mocks/binance.mocks';

describe('BinanceService', () => {
  let binanceService: BinanceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [BinanceService],
    }).compile();

    binanceService = app.get<BinanceService>(BinanceService);
  });

  describe('getHistoricalMarketData', () => {
    it('fetch the exercise history data of Binance API', async () => {
      const query: BinanceExerciseHistoryDTO = {
        underlying: BinanceSymbol.BTCUSDT,
        startTime: yesterday(),
        endTime: now(),
      };

      const mockExerciseHistoricalData =
        BinanceMockFactory.getMockApiResponse();

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockExerciseHistoricalData),
        }),
      ) as jest.Mock;

      const result = await binanceService.getExerciseHistory(query);

      expect(result).toEqual(mockExerciseHistoricalData);
    });
  });
});
