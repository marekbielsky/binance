import { Test, TestingModule } from '@nestjs/testing';
import { BinanceService } from '../binance.service';
import { HistoricalMarketDataDTO } from '../../dtos/binance.dto';
import { BinanceSymbol } from '../types/binance.types';
import { now, yesterday } from '../../../common/utils/date.util';
import {
  BinanceMockFactory,
  defaultBinanceApiRes,
} from '../../mocks/binance.mocks';
import { HttpStatus } from '@nestjs/common';
import {
  AppErrorCode,
  errorMessages,
} from '../../../common/errors/types/app-error-message.enum';
import { CustomHttpException } from '../../../common/errors/custom-exception.error';
import { BinanceHistoricalRecordRes } from '../../responses/binance.response';

describe('BinanceService', () => {
  let binanceService: BinanceService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [BinanceService],
    }).compile();

    binanceService = app.get<BinanceService>(BinanceService);
  });

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([defaultBinanceApiRes]),
      }),
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getHistoricalMarketData', () => {
    const query: HistoricalMarketDataDTO = {
      underlying: BinanceSymbol.BTCUSDT,
      startTime: yesterday(),
      endTime: now(),
      limit: 50,
    };

    function mockBinanceHistoricalRecord(
      strikePrice: string,
    ): BinanceHistoricalRecordRes {
      return BinanceMockFactory.getMockBinanceHistoricalRecord({
        strikePrice,
      });
    }

    it('should throw a failed dependency exception if Binance API request fails', async () => {
      global.fetch = jest.fn(() => Promise.reject({})) as jest.Mock;

      try {
        await binanceService.getHistoricalMarketData(query);
      } catch (e) {
        expect(e).toBeInstanceOf(CustomHttpException);
        expect(e.errorCode).toBe(AppErrorCode.FailedDependency);
        expect(e.status).toBe(HttpStatus.FAILED_DEPENDENCY);
        expect(e.message).toBe(errorMessages[AppErrorCode.FailedDependency]);
      }
    });

    it('should fetch the historical market data', async () => {
      const mockHistoricalMarketDataRes =
        BinanceMockFactory.getMockHistoricalMarketDataRes();

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result).toEqual(mockHistoricalMarketDataRes);
    });

    it('should return the percentage change equal to 0.00 if only one record received', async () => {
      const result = await binanceService.getHistoricalMarketData(query);

      expect(result.percentageChange).toBe('0.00');
    });

    it('should return the percentage change equal to 0.00 if the oldest and the newest price are the same', async () => {
      const binanceHistoricalRecords = [
        mockBinanceHistoricalRecord('100'),
        mockBinanceHistoricalRecord('100'),
        mockBinanceHistoricalRecord('100'),
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(binanceHistoricalRecords),
        }),
      ) as jest.Mock;

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result.percentageChange).toBe('0.00');
    });

    it('should calculate the correct percentage change if oldest price was 0', async () => {
      const binanceHistoricalRecords = [
        mockBinanceHistoricalRecord('0'),
        mockBinanceHistoricalRecord('100'),
        mockBinanceHistoricalRecord('200'),
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(binanceHistoricalRecords),
        }),
      ) as jest.Mock;

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result.percentageChange).toBe('100.00');
    });

    it('should calculate the correct percentage change if both prices are 0', async () => {
      const binanceHistoricalRecords = [
        mockBinanceHistoricalRecord('0.00'),
        mockBinanceHistoricalRecord('0.00'),
        mockBinanceHistoricalRecord('0.00'),
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(binanceHistoricalRecords),
        }),
      ) as jest.Mock;

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result.percentageChange).toBe('0.00');
    });

    it('should return the percentage change between the oldest and the newest price', async () => {
      const binanceHistoricalRecords = [
        mockBinanceHistoricalRecord('100'),
        mockBinanceHistoricalRecord('200'),
        mockBinanceHistoricalRecord('150'),
      ];

      global.fetch = jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve(binanceHistoricalRecords),
        }),
      ) as jest.Mock;

      const result = await binanceService.getHistoricalMarketData(query);

      expect(result.percentageChange).toBe('50.00');
    });
  });
});
