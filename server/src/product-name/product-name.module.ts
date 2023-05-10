import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from 'src/category/category.model';
import { CategoryModule } from 'src/category/category.module';
import { Unit } from 'src/unit/unit.model';
import { ProductNameController } from './product-name.controller';
import { ProductName } from './product-name.model';
import { ProductNameService } from './product-name.service';

@Module({
  controllers: [ProductNameController],
  providers: [ProductNameService],
  imports: [
    SequelizeModule.forFeature([ProductName, Category, Unit]),
    forwardRef(() => CategoryModule),
  ],

  exports: [ProductNameService],
})
export class ProductNameModule {}
