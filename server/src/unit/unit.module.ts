import { forwardRef, Module } from '@nestjs/common';
import { UnitService } from './unit.service';
import { UnitController } from './unit.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Unit } from './unit.model';
import { ProductName } from 'src/product-name/product-name.model';

@Module({
  providers: [UnitService],
  controllers: [UnitController],
  imports: [
    SequelizeModule.forFeature([Unit, ProductName]),
    forwardRef(() => ProductName),
  ],

  exports: [UnitService],
})
export class UnitModule {}
