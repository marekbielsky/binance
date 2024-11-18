import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MarketDataDocument = MarketData & Document;

@Schema()
export class MarketData {
  @Prop({ isRequired: true })
  public symbol: string;

  @Prop({ isRequired: true })
  public strikePrice: string;

  @Prop({ isRequired: true })
  public realStrikePrice: string;

  @Prop({ isRequired: true })
  public expiryDate: number;

  @Prop({ isRequired: true })
  public strikeResult: string;
}

export const MarketDataSchema = SchemaFactory.createForClass(MarketData);
