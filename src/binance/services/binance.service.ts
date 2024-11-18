import { Injectable } from '@nestjs/common';
import { subDays } from 'date-fns';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData(
    underlying: string = 'BTCUSDT',
    startTime: number = subDays(new Date(), 1).getTime(),
    endTime: number = new Date().getTime(),
  ): Promise<void> {
    const res = await fetch(
      `https://eapi.binance.com/eapi/v1/exerciseHistory?underlying=${underlying}&startTime=${startTime}&endTime=${endTime}`,
    );
    const data = await res.json();

    console.log(data);
  }
}
