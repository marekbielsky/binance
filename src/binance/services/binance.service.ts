import { Injectable } from '@nestjs/common';
import { HistoricalMarketDataParameters } from './types/binance.types';
import { getHistoricalDataParameters } from './utils/binance.utils';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData(
    query: BinanceExerciseHistoryDTO,
  ): Promise<any> {
    const { underlying, startTime, endTime } =
      getHistoricalDataParameters(query);

    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}`,
    );

    return res.json();
  }
}
