import {
  BinanceApiRes,
  HistoricalMarketDataRes,
} from '../responses/binance.response';

export const defaultBinanceApiRes: BinanceApiRes = {
  expiryDate: 1731916800000,
  strikePrice: '89500',
  realStrikePrice: '91718.32226717',
  strikeResult: 'REALISTIC_VALUE_STRICKEN',
  symbol: 'BTC-241118-89500-C',
};

const defaultHistoricalMarketDataRes: HistoricalMarketDataRes = {
  historicalMarketData: [defaultBinanceApiRes],
  percentageChange: '10.00%',
  priceRange: { min: 0, max: 100 },
};

export class BinanceMockFactory {
  public static getMockHistoricalMarketDataRes(): HistoricalMarketDataRes {
    return defaultHistoricalMarketDataRes;
  }
}
