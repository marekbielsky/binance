import { ApiProperty } from '@nestjs/swagger';

export class HistoricalMarketDataRes {
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
