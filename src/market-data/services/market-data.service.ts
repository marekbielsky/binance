import { Injectable } from '@nestjs/common';
import { MarketDataRepository } from '../repositories/market-data.repository';

@Injectable()
export class MarketDataService {
  constructor(private readonly marketDataRepository: MarketDataRepository) {}
}
