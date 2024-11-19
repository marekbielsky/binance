import { ApiProperty } from '@nestjs/swagger';
import { PriceRange } from '../services/types/binance.types';
import { defaultBinanceApiRes } from '../mocks/binance.mocks';

export class BinanceHistoricalRecordRes {
  @ApiProperty({ example: 'BTC-241118-89500-C' })
  public readonly symbol: string;

  @ApiProperty({ example: '89500' })
  public readonly strikePrice: string;

  @ApiProperty({ example: '91718.32226717' })
  public readonly realStrikePrice: string;

  @ApiProperty({ example: 1731916800000 })
  public readonly expiryDate: number;

  @ApiProperty({ example: 'REALISTIC_VALUE_STRICKEN' })
  public readonly strikeResult: string;
}

export class HistoricalMarketDataRes {
  @ApiProperty({ example: [defaultBinanceApiRes] })
  public readonly historicalMarketData: BinanceHistoricalRecordRes[];

  @ApiProperty({ example: '100.00%' })
  public readonly percentageChange: string;

  @ApiProperty({ example: { min: 0, max: 100 } })
  public readonly priceRange: PriceRange;
}
