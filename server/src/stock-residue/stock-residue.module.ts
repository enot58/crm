import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductPrice } from 'src/price/product-price.model';
import { ProductName } from 'src/product-name/product-name.model';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { StockResidueController } from './stock-residue.controller';
import { StockResidue } from './stock-residue.model';
import { StockResidueService } from './stock-residue.service';

@Module({
  controllers: [StockResidueController],
  providers: [StockResidueService],
  imports: [
    SequelizeModule.forFeature([
      StockResidue,
      ProductName,
      Warehouse,
      ProductPrice,
    ]),
  ],

  exports: [StockResidueService],
})
export class StockResidueModule {}
