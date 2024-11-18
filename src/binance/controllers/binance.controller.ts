import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';
import { ExerciseHistoryDataRes } from '../responses/binance.response';
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  getSchemaPath,
} from '@nestjs/swagger';

@Controller('/binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('/exercise-history')
  @ApiOperation({
    summary: 'Fetches the historical market data of Binance API',
  })
  @ApiQuery({ type: Function })
  @ApiOkResponse({
    description: 'Fetches the historical market data of Binance API',
    type: ExerciseHistoryDataRes,
    schema: {
      $ref: getSchemaPath(ExerciseHistoryDataRes),
    },
  })
  public async getExerciseHistory(
    @Query() query: BinanceExerciseHistoryDTO,
  ): Promise<ExerciseHistoryDataRes[]> {
    return this.binanceService.getExerciseHistory(query);
  }
}
