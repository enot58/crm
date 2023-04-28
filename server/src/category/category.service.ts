import { CreateCategoryDto } from './dto/category.dto';
import { Category } from './category.model';

import { NotFoundException } from '@nestjs/common/exceptions';
import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category) private categoryRepository: typeof Category,
  ) {}

  // Создаём тип
  async createCategory(dto: CreateCategoryDto) {
    const category = await this.categoryRepository.create(dto);

    return category;
  }
  // Получаем все типы
  async getAllCategories() {
    try {
      const category = await this.categoryRepository.findAll();
      return category;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Получаем тип по id
  async getCategoryById(id: number) {
    try {
      const category = await this.categoryRepository.findByPk(id);
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
}
