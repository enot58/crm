import { Module } from '@nestjs/common';
import { StockResidueController } from './stock-residue.controller';
import { StockResidueService } from './stock-residue.service';

@Module({
  controllers: [StockResidueController],
  providers: [StockResidueService]
})
export class StockResidueModule {}
