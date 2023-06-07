import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './warehouse.model';
import { Price } from 'src/price/price.model';
import { ProductName } from 'src/product-name/product-name.model';
import { StockResidue } from 'src/stock-residue/stock-residue.model';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  imports: [
    SequelizeModule.forFeature([Warehouse, Price, ProductName, StockResidue]),
  ],

  exports: [WarehouseService],
})
export class WarehouseModule {}
