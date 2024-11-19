import { HttpStatus, Injectable } from '@nestjs/common';
import { HistoricalMarketDataDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import {
  BinanceHistoricalRecordRes,
  HistoricalMarketDataRes,
} from '../responses/binance.response';
import { CustomHttpException } from '../../common/errors/custom-exception.error';
import { AppErrorCode } from '../../common/errors/types/app-error-message.enum';
import { AnalyzedMarketChanges, PriceRange } from './types/binance.types';
import { BinanceMapper } from '../mappers/binance.mapper';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData({
    underlying,
    startTime,
    endTime,
    limit,
  }: HistoricalMarketDataDTO): Promise<HistoricalMarketDataRes> {
    try {
      const res = await fetch(
        `${process.env.BINANCE_API}/${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`,
      );

      const data = await res.json().then((res) => res.reverse());
      const analyzedChanges = this.analyzeMarketChanges(data);

      return BinanceMapper.toHistoricalMarketDataRes(data, analyzedChanges);
    } catch (e) {
      throw new CustomHttpException(
        AppErrorCode.FailedDependency,
        HttpStatus.FAILED_DEPENDENCY,
      );
    }
  }

  private analyzeMarketChanges(
    data: BinanceHistoricalRecordRes[],
  ): AnalyzedMarketChanges {
    const percentageChange = this.calculatePercentageChange(data);
    const priceRange = this.findPriceRange(data);

    return { percentageChange, priceRange };
  }

  private calculatePercentageChange(
    data: BinanceHistoricalRecordRes[],
  ): string {
    if (data.length < 2) {
      return '0.00';
    }

    const oldestPrice = parseFloat(data[0].strikePrice);
    const newestPrice = parseFloat(data[data.length - 1].strikePrice);

    const [min, max] = [oldestPrice, newestPrice].sort();

    const isMinMaxBothZero = min === 0 && max === 0;
    const isZeroMinWithNonZeroMax = min === 0 && max !== 0;

    if (isMinMaxBothZero) {
      return '0.00';
    } else if (isZeroMinWithNonZeroMax) {
      return '100.00';
    }

    const percentageChange = ((max - min) / min) * 100;

    return percentageChange.toFixed(2);
  }

  private findPriceRange(data: BinanceHistoricalRecordRes[]): PriceRange {
    const prices = data.map((item) => parseFloat(item.strikePrice));

    const min = Math.min(...prices);
    const max = Math.max(...prices);

    return { min, max };
  }
}
