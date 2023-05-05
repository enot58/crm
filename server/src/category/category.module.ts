import { TypeCategory } from './type-category.model';
import { Type } from './../type/type.model';
import { Category } from './category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { TypeModule } from 'src/type/type.module';
import { TypeService } from 'src/type/type.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Category, Type, TypeCategory]),
    forwardRef(() => TypeModule),
  ],
  providers: [CategoryService],
  controllers: [CategoryController],
  exports: [CategoryService],
})
export class CategoryModule {}
