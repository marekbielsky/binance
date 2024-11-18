import { Injectable } from '@nestjs/common';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { HistoricalMarketDataParameters } from './types/binance.types';
import { getHistoricalDataParameters } from './utils/binance.utils';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData(
    parameters?: HistoricalMarketDataParameters,
  ): Promise<any> {
    const { underlying, startTime, endTime } =
      getHistoricalDataParameters(parameters);

    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&limit=100`,
    );

    return res.json();
  }
}
