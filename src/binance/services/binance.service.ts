import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceService {
  public async getHistoricalMarketData(
    underlying: string = 'BTCUSDT',
  ): Promise<void> {
    const res = await fetch(
      `https://eapi.binance.com/eapi/v1/exerciseHistory?underlying=${underlying}`,
    );
    const data = await res.json();

    console.log(data.length);
  }
}
