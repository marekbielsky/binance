import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MarketData } from '../schemas/market-data.schema';

@Injectable()
export class MarketDataRepository {
  constructor(
    @InjectModel(MarketData.name)
    private readonly marketDataModel: Model<MarketData>,
  ) {}

  public async create(): Promise<void> {
    const marketData = new this.marketDataModel({
      symbol: 'symbol here',
      strikePrice: '',
      realStrikePrice: '',
      expiryDate: 1,
      strikeResult: '',
    });

    await marketData.save();
  }
}
