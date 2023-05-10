import { Module } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductName } from 'src/product-name/product-name.model';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { Price } from './price.model';

@Module({
  providers: [PriceService],
  controllers: [PriceController],
  imports: [SequelizeModule.forFeature([ProductName, Warehouse, Price])],
})
export class PriceModule {}
