import { TypeCategory } from './../category/type-category.model';
import { Category } from './../category/category.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';
import { Type } from './type.model';

@Module({
  controllers: [TypeController],
  providers: [TypeService],
  imports: [SequelizeModule.forFeature([Type, Category, TypeCategory])],
})
export class TypeModule {}
