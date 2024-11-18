import { Module } from '@nestjs/common';
import { MarketDataService } from './services/market-data.service';
import { MarketDataRepository } from './repositories/market-data.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketData, MarketDataSchema } from './schemas/market-data.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MarketData.name, schema: MarketDataSchema },
    ]),
  ],
  providers: [MarketDataService, MarketDataRepository],
})
export class MarketDataModule {}
