import {
  BinanceApiRes,
  HistoricalMarketDataRes,
} from '../responses/binance.response';
import { AnalyzedMarketChanges } from '../services/types/binance.types';

export class BinanceMapper {
  public static toHistoricalMarketDataRes(
    data: BinanceApiRes[],
    analyzedMarketChanges: AnalyzedMarketChanges,
  ): HistoricalMarketDataRes {
    return {
      historicalMarketData: data,
      percentageChange: analyzedMarketChanges.percentageChange,
      priceRange: analyzedMarketChanges.priceRange,
    };
  }
}
