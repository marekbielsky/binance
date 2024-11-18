import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../binance.service';
import { ConfigModule } from '@nestjs/config';
import { HistoricalMarketDataDTO } from '../../dtos/binance.dto';
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
    it('should fetch the historical market data', async () => {
      const query: HistoricalMarketDataDTO = {
        underlying: BinanceSymbol.BTCUSDT,
        startTime: yesterday(),
        endTime: now(),
      };

      const mockHistoricalMarketDataRes =
        BinanceMockFactory.getMockHistoricalMarketDataRes();

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(mockHistoricalMarketDataRes),
        }),
      ) as jest.Mock;

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result).toEqual(mockHistoricalMarketDataRes);
    });
  });
});
