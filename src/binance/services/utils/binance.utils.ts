import {
  BinanceSymbol,
  HistoricalMarketDataParameters,
} from '../types/binance.types';
import { NOW, yesterday } from '../../../common/utils/date.util';
import { BinanceExerciseHistoryDTO } from '../../dtos/binance.dto';

export function getHistoricalDataParameters(
  query: BinanceExerciseHistoryDTO,
): HistoricalMarketDataParameters {
  return {
    underlying: query.underlying ?? BinanceSymbol.BTCUSDT,
    startTime: query.startTime ?? yesterday(),
    endTime: query.endTime ?? NOW,
  };
}
