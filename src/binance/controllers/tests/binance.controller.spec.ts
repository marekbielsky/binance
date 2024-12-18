import { Test, TestingModule } from '@nestjs/testing';
import { BinanceController } from '../binance.controller';
import { BinanceService } from '../../services/binance.service';
import { HistoricalMarketDataDTO } from '../../dtos/binance.dto';
import { BinanceSymbol } from '../../services/types/binance.types';
import { BinanceMockFactory } from '../../mocks/binance.mocks';

describe('BinanceController', () => {
  let binanceController: BinanceController;
  let binanceService: BinanceService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BinanceController],
      providers: [BinanceService],
    }).compile();

    binanceController = app.get<BinanceController>(BinanceController);
    binanceService = app.get<BinanceService>(BinanceService);
  });

  describe('getHistoricalMarketData', () => {
    it('should be called with specific arguments', async () => {
      const query: HistoricalMarketDataDTO = {
        underlying: BinanceSymbol.BTCUSDT,
        startTime: 1622544000000,
        endTime: 1622544000000,
        limit: 50,
      };

      const spyGetHistoricalMarketData = jest.spyOn(
        binanceController,
        'getHistoricalMarketData',
      );

      const mockHistoricalMarketDataRes =
        BinanceMockFactory.getMockHistoricalMarketDataRes();

      binanceService.getHistoricalMarketData = jest
        .fn()
        .mockResolvedValueOnce(mockHistoricalMarketDataRes);

      const result = await binanceController.getHistoricalMarketData(query);

      expect(result).toEqual(mockHistoricalMarketDataRes);
      expect(spyGetHistoricalMarketData).toHaveBeenCalledTimes(1);
      expect(spyGetHistoricalMarketData).toHaveBeenCalledWith(query);
    });
  });
});
