import { Module } from '@nestjs/common';
import { BinanceService } from './services/binance.service';
import { BinanceController } from './controllers/binance.controller';

@Module({
  controllers: [BinanceController],
  providers: [BinanceService],
  exports: [BinanceService],
})
export class BinanceModule {}
