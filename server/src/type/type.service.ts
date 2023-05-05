import { NotFoundException } from '@nestjs/common/exceptions';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/type.dto';
import { Type } from './type.model';
import { AddCategoryDto } from './dto/add_category.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class TypeService {
  constructor(
    @InjectModel(Type)
    private typeRepository: typeof Type,
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  // Создаём тип
  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);
    type;
    return type;
  }
  // Получаем все типы
  async getAllTypes() {
    try {
      const type = await this.typeRepository.findAll({
        include: { all: true },
      });

      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Получаем тип по id
  async getTypeById(id: number) {
    try {
      const type = await this.typeRepository.findByPk(id, {
        include: { all: true },
      });
      if (!type) {
        throw new NotFoundException('Тип не найден');
      }
      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем тип
  async updateType(id: number, dto: CreateTypeDto) {
    try {
      const type = await this.typeRepository.findByPk(id);
      if (!type) {
        throw new NotFoundException('Тип не найден');
      }
      type.name = dto.name;
      await type.save();
      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем тип
  async deleteType(id: number) {
    try {
      const type = await this.typeRepository.findByPk(id);
      if (!type) {
        throw new NotFoundException('Тип не найден');
      }
      await type.destroy();
      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Выполняем поиск по наименованию
  async findByName(name: string) {
    try {
      const type = await this.typeRepository.findOne({ where: { name } });
      if (!type) {
        throw new NotFoundException('Тип не найден');
      }
      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  //Добавляем категорию в тип
  async addCategoryToType({ id, name }) {
    try {
      // const { id, name } = dto;
      console.log(id, name);
      const typeN = await this.typeRepository.findByPk(id);
      const category = await this.categoryService.findCategoryByName(name);

      if (typeN && category) {
        await typeN.$add('category', category);
        return typeN;
      }

      throw new NotFoundException('Тип или категория не найдены');
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем категорию из типов
  async deleteCategoryFromType(dto: AddCategoryDto) {
    try {
      const { id: typeId, name: nameCategory } = dto;

      const type = await this.typeRepository.findByPk(typeId);
      const category = await this.categoryService.findCategoryByName(
        nameCategory,
      );

      if (type && category) {
        await type.$remove('category', category);
        return type;
      }
      throw new NotFoundException('Тип или категория не найдены');
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
