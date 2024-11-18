import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsMilitaryTime,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { BinanceSymbol } from '../services/types/binance.types';
import { now, yesterday } from '../../common/utils/date.util';

export class BinanceExerciseHistoryDTO {
  @IsString()
  @ApiProperty({
    example: BinanceSymbol.BTCUSDT,
    description:
      "it's a Binance API symbol responsible for fetching correct data",
  })
  public underlying: BinanceSymbol;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiPropertyOptional({
    example: new Date().getTime(),
    description: 'time in ms',
    default: yesterday(),
  })
  public startTime?: number = yesterday();

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiPropertyOptional({
    example: new Date().getTime(),
    description: 'time in ms',
    default: now(),
  })
  public endTime?: number = now();

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(100)
  @ApiPropertyOptional({
    example: 25,
    description: 'limit of fetched records',
    default: 100,
    minimum: 1,
    maximum: 100,
  })
  public limit?: number = 100;
}
