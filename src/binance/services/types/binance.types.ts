export enum BinanceSymbol {
  BTCUSDT = 'BTCUSDT',
}

export interface AnalyzedMarketChanges {
  percentageChange: string;
  priceRange: PriceRange;
}

export interface PriceRange {
  min: number;
  max: number;
}
