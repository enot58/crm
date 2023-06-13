import { SequelizeModule } from '@nestjs/sequelize';
import { forwardRef, Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { Warehouse } from './warehouse.model';
import { Price } from 'src/price/price.model';
import { ProductName } from 'src/product-name/product-name.model';
import { StockResidue } from 'src/stock-residue/stock-residue.model';
import { ObjectsBuilding } from 'src/objects-building/objects-building.model';
import { ObjectsWarehouse } from 'src/objects-building/object-warehouse.model';
import { ObjectsBuildingModule } from 'src/objects-building/objects-building.module';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService],
  imports: [
    SequelizeModule.forFeature([
      Warehouse,
      Price,
      ProductName,
      StockResidue,
      ObjectsBuilding,
      ObjectsWarehouse,
    ]),
    forwardRef(() => ObjectsBuildingModule),
  ],

  exports: [WarehouseService],
})
export class WarehouseModule {}
