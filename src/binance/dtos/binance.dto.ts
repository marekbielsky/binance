import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { BinanceSymbol } from '../services/types/binance.types';

export class BinanceExerciseHistoryDTO {
  @IsString()
  @ApiProperty({
    example: 'BTCUSDT',
    description:
      "it's a Binance API symbol responsible for fetching correct data",
  })
  public underlying: BinanceSymbol;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    example: new Date().getTime(),
    description: 'time in ms must be provided',
  })
  public startTime?: number;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({
    example: new Date().getTime(),
    description: 'time in ms must be provided',
  })
  public endTime?: number;
}
