import { TypeCategory } from './type-category.model';
import { Type } from './../type/type.model';
import { Category } from './category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [SequelizeModule.forFeature([Category, Type, TypeCategory])],
})
export class CategoryModule {}
