import { Injectable } from '@nestjs/common';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { HistoricalMarketDataParameters } from './types/binance.types';
import { getHistoricalDataParameters } from './utils/binance.utils';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData(
    parameters?: HistoricalMarketDataParameters,
  ): Promise<void> {
    const { underlying, startTime, endTime } =
      getHistoricalDataParameters(parameters);

    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}`,
    );

    const historicalMarketData = await res.json();

    console.log(historicalMarketData);
  }
}
