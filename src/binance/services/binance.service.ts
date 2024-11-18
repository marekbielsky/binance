import { Injectable } from '@nestjs/common';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { getHistoricalDataParameters } from './utils/binance.utils';

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
