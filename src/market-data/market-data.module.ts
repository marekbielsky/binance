import { Module } from '@nestjs/common';
import { MarketDataService } from './services/market-data.service';
import { MarketDataRepository } from './repositories/market-data.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { MarketData, MarketDataSchema } from './schemas/market-data.schema';
import { MarketDataController } from './controllers/market-data.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MarketData.name, schema: MarketDataSchema },
    ]),
  ],
  controllers: [MarketDataController],
  providers: [MarketDataService, MarketDataRepository],
})
export class MarketDataModule {}
