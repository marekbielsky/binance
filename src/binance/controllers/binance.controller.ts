import { Controller, Get, Param, Query } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';

@Controller('/binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('/exercise-history')
  public async getExerciseHistory(
    @Query() query: BinanceExerciseHistoryDTO,
  ): Promise<void> {
    return this.binanceService.getHistoricalMarketData(query);
  }
}
