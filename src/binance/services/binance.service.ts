import { Injectable } from '@nestjs/common';
import { HistoricalMarketDataDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { HistoricalMarketDataRes } from '../responses/binance.response';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData({
    underlying,
    startTime,
    endTime,
    limit,
  }: HistoricalMarketDataDTO): Promise<HistoricalMarketDataRes[]> {
    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`,
    );

    return res.json();
  }
}
