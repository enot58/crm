import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductName } from 'src/product-name/product-name.model';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { Price } from './price.model';
import { WarehouseModule } from 'src/warehouse/warehouse.module';
import { ProductNameModule } from 'src/product-name/product-name.module';
import { ProductPrice } from './product-price.model';

@Module({
  providers: [PriceService],
  controllers: [PriceController],
  imports: [
    WarehouseModule,
    ProductNameModule,
    SequelizeModule.forFeature([ProductName, Warehouse, Price, ProductPrice]),
  ],

  exports: [PriceService],
})
export class PriceModule {}
