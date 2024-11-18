import { Controller, Get, Post } from '@nestjs/common';
import { MarketDataService } from '../services/market-data.service';

@Controller('/market-data')
export class MarketDataController {
  constructor(private readonly marketDataService: MarketDataService) {}

  @Post('/')
  public async createMarketData(): Promise<void> {
    await this.marketDataService.createMarketData();
  }

  @Get('/')
  public async getMarketData(): Promise<any> {
    return this.marketDataService.getMarketData();
  }
}
