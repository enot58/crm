import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/category/category.model';
import { CategoryModule } from 'src/category/category.module';
import { Price } from 'src/price/price.model';
import { ProductPrice } from 'src/price/product-price.model';
import { StockResidue } from 'src/stock-residue/stock-residue.model';
import { Unit } from 'src/unit/unit.model';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { ProductNameController } from './product-name.controller';
import { ProductName } from './product-name.model';
import { ProductNameService } from './product-name.service';

@Module({
  controllers: [ProductNameController],
  providers: [ProductNameService],
  imports: [
    SequelizeModule.forFeature([
      ProductName,
      Category,
      Unit,
      Price,
      Warehouse,
      StockResidue,
      ProductPrice,
    ]),
    forwardRef(() => CategoryModule),
  ],

  exports: [ProductNameService],
})
export class ProductNameModule {}
