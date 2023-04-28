import { NotFoundException } from '@nestjs/common/exceptions';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTypeDto } from './dto/type.dto';
import { Type } from './type.model';

@Injectable()
export class TypeService {
  constructor(@InjectModel(Type) private typeRepository: typeof Type) {}

  // Создаём тип
  async createType(dto: CreateTypeDto) {
    const type = await this.typeRepository.create(dto);
    type;
    return type;
  }
  // Получаем все типы
  async getAllTypes() {
    try {
      const type = await this.typeRepository.findAll();

      return type;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Получаем тип по id
  async getTypeById(id: number) {
    try {
      const type = await this.typeRepository.findByPk(id);
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
}
