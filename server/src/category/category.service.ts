import { CreateCategoryDto } from './dto/category.dto';
import { Category } from './category.model';

import { NotFoundException } from '@nestjs/common/exceptions';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TypeService } from 'src/type/type.service';
import { AddTypeDto } from './dto/add_type.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category)
    private categoryRepository: typeof Category,
    private typeService: TypeService,
  ) {}

  // Создаём тип
  async createCategory(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);

    return category;
  }
  // Получаем все типы
  async getAllCategories() {
    try {
      const category = await this.categoryRepository.findAll({
        include: { all: true },
      });
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Получаем тип по id
  async getCategoryById(id: number) {
    try {
      const category = await this.categoryRepository.findByPk(id, {
        include: { all: true },
      });
      if (!category) {
        throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND);
      }
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем тип
  async updateCategory(id: number, dto: CreateCategoryDto) {
    try {
      const category = await this.categoryRepository.findByPk(id);
      if (!category) {
        throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND);
      }
      category.name = dto.name;
      await category.save();
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем тип
  async deleteCategory(id: number) {
    try {
      const category = await this.categoryRepository.findByPk(id);
      if (!category) {
        throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND);
      }
      await category.destroy();
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Ищем по наименованию категорию
  async findCategoryByName(name: string) {
    try {
      const category = await this.categoryRepository.findOne({
        where: { name },
      });
      if (!category) {
        throw new HttpException('Категория не найдена', HttpStatus.NOT_FOUND);
      }
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  //Добавить категорию в тип оборудования
  async addCategory(dto: AddTypeDto) {
    try {
      const { id: categoryId, name: typeName } = dto;
      const category = await this.getCategoryById(categoryId);
      const type = await this.typeService.findByName(typeName);
      if (category && type) {
        await category.$add('types', type);
        return category;
      }
      throw new HttpException(
        'Пользователь или роль не существует',
        HttpStatus.NOT_FOUND,
      );
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  //Удалить категорию из типа оборудования
  async deleteCategoryFromType(dto: AddTypeDto) {
    try {
      const { id: categoryId, name: typeName } = dto;
      const category = await this.getCategoryById(categoryId);
      const type = await this.typeService.findByName(typeName);
      if (category && type) {
        await category.$remove('type', type);
        return category;
      }
      throw new HttpException(
        'Пользователь или роль не существует',
        HttpStatus.NOT_FOUND,
      );
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
