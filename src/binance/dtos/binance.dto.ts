import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { BinanceSymbol } from '../services/types/binance.types';

export class BinanceExerciseHistoryDTO {
  @IsString()
  @ApiProperty({
    example: 'BTC-241118-89500-C',
    description: "it's a Binance API symbol",
  })
  public underlying: BinanceSymbol;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: new Date().getTime() })
  public startTime?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: new Date().getTime() })
  public endTime?: number;
}
