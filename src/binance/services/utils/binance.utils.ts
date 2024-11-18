import {
  BinanceSymbol,
  HistoricalMarketDataParameters,
} from '../types/binance.types';
import { NOW, yesterday } from '../../../common/utils/date.util';

export function getHistoricalDataParameters(
  parameters?: HistoricalMarketDataParameters,
): HistoricalMarketDataParameters {
  return (
    parameters ?? {
      underlying: BinanceSymbol.BTCUSDT,
      startTime: yesterday(),
      endTime: NOW,
    }
  );
}
