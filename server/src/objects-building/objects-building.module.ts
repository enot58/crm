import { ObjectsBuilding } from './objects-building.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ObjectsBuildingService } from './objects-building.service';
import { ObjectsBuildingController } from './objects-building.controller';

@Module({
  providers: [ObjectsBuildingService],
  controllers: [ObjectsBuildingController],
  imports: [SequelizeModule.forFeature([ObjectsBuilding])],
})
export class ObjectsBuildingModule {}
