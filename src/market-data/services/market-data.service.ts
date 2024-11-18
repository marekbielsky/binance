import { Injectable } from '@nestjs/common';
import { MarketDataRepository } from '../repositories/market-data.repository';
import { BinanceService } from '../../binance/services/binance.service';

@Injectable()
export class MarketDataService {
  constructor(
    private readonly binanceService: BinanceService,
    private readonly marketDataRepository: MarketDataRepository,
  ) {}

  public async createMarketData(): Promise<void> {
    await this.marketDataRepository.create();
  }

  public async getMarketData() {
    return this.binanceService.getHistoricalMarketData();
  }
}
