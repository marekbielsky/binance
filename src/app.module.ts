import { Module } from '@nestjs/common';
import { BinanceModule } from './binance/binance.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), BinanceModule],
})
export class AppModule {}
