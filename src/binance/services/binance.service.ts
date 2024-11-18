import { Injectable } from '@nestjs/common';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { ExerciseHistoryDataRes } from '../responses/binance.response';

@Injectable()
export class BinanceService {
  public async getExerciseHistory({
    underlying,
    startTime,
    endTime,
    limit,
  }: BinanceExerciseHistoryDTO): Promise<ExerciseHistoryDataRes[]> {
    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}&limit=${limit}`,
    );

    return res.json();
  }
}
