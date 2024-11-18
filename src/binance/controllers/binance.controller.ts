import { Controller, Get } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';

@Controller('/binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('/exercise-history')
  public async getExerciseHistory(): Promise<void> {
    return this.binanceService.getHistoricalMarketData();
  }
}
