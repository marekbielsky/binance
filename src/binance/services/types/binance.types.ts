export enum BinanceSymbol {
  BTCUSDT = 'BTCUSDT',
}

export interface ExerciseHistoryBinanceApiResponse {
  symbol: string;
  strikePrice: string;
  realStrikePrice: string;
  expiryDate: number;
  strikeResult: string;
}
