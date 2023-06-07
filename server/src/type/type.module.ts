import { TypeCategory } from './../category/type-category.model';
import { Category } from './../category/category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { Type } from './type.model';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Type, Category, TypeCategory]),
    forwardRef(() => CategoryModule),
  ],
  controllers: [TypeController],
  providers: [TypeService],
  exports: [TypeService],
})
export class TypeModule {}
