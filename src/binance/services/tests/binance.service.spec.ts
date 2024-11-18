import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../binance.service';
import { HistoricalMarketDataDTO } from '../../dtos/binance.dto';
import { BinanceSymbol } from '../types/binance.types';
import { now, yesterday } from '../../../common/utils/date.util';
import { BinanceMockFactory } from '../../mocks/binance.mocks';
import { HttpStatus } from '@nestjs/common';
import {
  AppErrorCode,
  errorMessages,
} from '../../../common/errors/types/app-error-message.enum';

describe('BinanceService', () => {
  let binanceService: BinanceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [BinanceService],
    }).compile();

    binanceService = app.get<BinanceService>(BinanceService);
  });

  describe('getHistoricalMarketData', () => {
    const query: HistoricalMarketDataDTO = {
      underlying: BinanceSymbol.BTCUSDT,
      startTime: yesterday(),
      endTime: now(),
      limit: 50,
    };

    it('should fetch the historical market data', async () => {
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

    it('should throw a failed dependency exception if Binance API request fails', async () => {
      global.fetch = jest.fn(() => Promise.reject({})) as jest.Mock;

      try {
        await binanceService.getHistoricalMarketData(query);
      } catch (e) {
        expect(e.errorCode).toBe(AppErrorCode.FailedDependency);
        expect(e.status).toBe(HttpStatus.FAILED_DEPENDENCY);
        expect(e.message).toBe(errorMessages[AppErrorCode.FailedDependency]);
      }
    });
  });
});
