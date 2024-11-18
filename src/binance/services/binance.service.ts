import { Injectable } from '@nestjs/common';
import { BinanceExerciseHistoryDTO } from '../dtos/binance.dto';
import { BinanceApiRoutes } from '../../common/routes/routes.enum';
import { getExerciseHistoryParameters } from './utils/binance.utils';
import { ExerciseHistoryDataRes } from '../responses/binance.response';

@Injectable()
export class BinanceService {
  public async getExerciseHistory(
    query: BinanceExerciseHistoryDTO,
  ): Promise<ExerciseHistoryDataRes[]> {
    const { underlying, startTime, endTime } =
      getExerciseHistoryParameters(query);

    const res = await fetch(
      `${BinanceApiRoutes.ExerciseHistory}?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}`,
    );

    const data = await res.json();

    return data;
  }
}
