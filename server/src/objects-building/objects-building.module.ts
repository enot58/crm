import { ObjectsBuilding } from './objects-building.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { forwardRef, Module } from '@nestjs/common';
import { ObjectsBuildingService } from './objects-building.service';
import { ObjectsBuildingController } from './objects-building.controller';
import { ObjectsWarehouse } from './object-warehouse.model';
import { WarehouseModule } from 'src/warehouse/warehouse.module';
import { Warehouse } from 'src/warehouse/warehouse.model';

@Module({
  providers: [ObjectsBuildingService],
  controllers: [ObjectsBuildingController],
  imports: [
    SequelizeModule.forFeature([ObjectsBuilding, ObjectsWarehouse, Warehouse]),
    forwardRef(() => WarehouseModule),
  ],
})
export class ObjectsBuildingModule {}
