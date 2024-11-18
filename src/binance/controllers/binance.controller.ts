import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';
import { ExerciseHistoryDataRes } from '../responses/binance.response';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/binance')
@ApiTags('/binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('/exercise-history')
  @ApiOperation({
    summary: 'Fetches the historical market data of Binance API',
  })
  @ApiOkResponse({
    description: 'Fetches the historical market data of Binance API',
    type: ExerciseHistoryDataRes,
  })
  public async getExerciseHistory(
    @Query() query: BinanceExerciseHistoryDTO,
  ): Promise<ExerciseHistoryDataRes[]> {
    return this.binanceService.getExerciseHistory(query);
  }
}
