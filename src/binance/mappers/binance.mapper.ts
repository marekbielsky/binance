import {
  BinanceHistoricalRecordRes,
  HistoricalMarketDataRes,
} from '../responses/binance.response';
import { AnalyzedMarketChanges } from '../services/types/binance.types';

export class BinanceMapper {
  public static toHistoricalMarketDataRes(
    data: BinanceHistoricalRecordRes[],
    analyzedMarketChanges: AnalyzedMarketChanges,
  ): HistoricalMarketDataRes {
    return {
      historicalMarketData: data,
      percentageChange: analyzedMarketChanges.percentageChange,
      priceRange: analyzedMarketChanges.priceRange,
    };
  }
}
