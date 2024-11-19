import { HttpStatus, Injectable } from '@nestjs/common';
import { HistoricalMarketDataDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { HistoricalMarketDataRes } from '../responses/binance.response';
import { CustomHttpException } from '../../common/errors/custom-exception.error';
import { AppErrorCode } from '../../common/errors/types/app-error-message.enum';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData({
    underlying,
    startTime,
    endTime,
    limit,
  }: HistoricalMarketDataDTO): Promise<HistoricalMarketDataRes[]> {
    try {
      const res = await fetch(
        `${process.env.BINANCE_API}/${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`,
      );

      return res.json().then((data) => data.reverse());
    } catch (e) {
      throw new CustomHttpException(
        AppErrorCode.FailedDependency,
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
  }
}
