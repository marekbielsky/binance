import { ExerciseHistoryBinanceApiResponse } from '../services/types/binance.types';

const defaultExerciseHistoryResponse: ExerciseHistoryBinanceApiResponse = {
  expiryDate: 1731916800000,
  strikePrice: '89500',
  realStrikePrice: '91718.32226717',
  strikeResult: 'REALISTIC_VALUE_STRICKEN',
  symbol: 'BTC-241118-89500-C',
};

export class BinanceMockFactory {
  public static getMockApiResponse(): ExerciseHistoryBinanceApiResponse[] {
    return [defaultExerciseHistoryResponse];
  }
}