import { BinanceSymbol } from '../types/binance.types';
import { now, yesterday } from '../../../common/utils/date.util';
import { BinanceExerciseHistoryDTO } from '../../dtos/binance.dto';

export function getExerciseHistoryParameters(
  query: BinanceExerciseHistoryDTO,
): BinanceExerciseHistoryDTO {
  return {
    underlying: query.underlying ?? BinanceSymbol.BTCUSDT,
    startTime: query.startTime ?? yesterday(),
    endTime: query.endTime ?? now(),
  };
}
