import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Price } from 'src/price/price.model';
import { PriceModule } from 'src/price/price.module';
import { ProductName } from 'src/product-name/product-name.model';
import { ProductNameModule } from 'src/product-name/product-name.module';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { WarehouseModule } from 'src/warehouse/warehouse.module';
import { StockResidueController } from './stock-residue.controller';
import { StockResidue } from './stock-residue.model';
import { StockResidueService } from './stock-residue.service';

@Module({
  controllers: [StockResidueController],
  providers: [StockResidueService],
  imports: [
    WarehouseModule,
    ProductNameModule,
    PriceModule,
    SequelizeModule.forFeature([StockResidue, ProductName, Warehouse, Price]),
  ],

  exports: [StockResidueService],
})
export class StockResidueModule {}
