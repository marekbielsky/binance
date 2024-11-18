import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class BinanceExerciseHistoryDTO {
  @IsString()
  @IsNotEmpty()
  @Type(() => String)
  public symbol: string;

  @IsOptional()
  @IsDate()
  public startTime?: number;

  @IsOptional()
  @IsDate()
  public endTime?: number;
}
