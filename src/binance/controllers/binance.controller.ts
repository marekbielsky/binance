import { Controller, Get, Query } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { HistoricalMarketDataDTO } from '../dtos/binance.dto';
import { HistoricalMarketDataRes } from '../responses/binance.response';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('/binance')
@ApiTags('/binance')
export class BinanceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get('/historical-market-data')
  @ApiOperation({
    summary: 'Fetches the historical market data of Binance API',
  })
  @ApiOkResponse({
    description: 'Fetches the historical market data of Binance API',
    type: HistoricalMarketDataRes,
  })
  public async getHistoricalMarketData(
    @Query() query: HistoricalMarketDataDTO,
  ): Promise<HistoricalMarketDataRes[]> {
    return this.binanceService.getHistoricalMarketData(query);
  }
}
