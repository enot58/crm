import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import CreateUnitDto from './dto/create-unit.dto';
import { Unit } from './unit.model';

@Injectable()
export class UnitService {
  constructor(@InjectModel(Unit) private unitRepository: typeof Unit) {}

  // Создаём еденицу измерения
  async createUnit(dto: CreateUnitDto): Promise<Unit> {
    try {
      const [unit, created] = await this.unitRepository.findOrCreate({
        where: { name: dto.name },
        defaults: { ...dto },
      });

      if (!created) {
        throw new HttpException(
          'Еденица измерения с таким названием уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      return unit;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем все еденицы
  async getAllUnits(): Promise<Unit[]> {
    try {
      const units = await this.unitRepository.findAll();
      return units;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем еденицу по id
  async getUnitById(id: number): Promise<Unit> {
    try {
      const unit = await this.unitRepository.findByPk(id);
      if (!unit) {
        throw new HttpException('Еденица не найдена', HttpStatus.BAD_REQUEST);
      }
      return unit;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем еденицу измерения
  async updateUnit(id: number, dto: CreateUnitDto): Promise<Unit> {
    try {
      const unit = await this.unitRepository.findByPk(id);
      if (!unit) {
        throw new HttpException('Еденица не найдена', HttpStatus.BAD_REQUEST);
      }
      await unit.update(dto);
      return unit;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем еденицу измерения
  async deleteUnit(id: number): Promise<Unit> {
    try {
      const unit = await this.unitRepository.findByPk(id);
      if (!unit) {
        throw new HttpException('Еденица не найдена', HttpStatus.BAD_REQUEST);
      }
      await unit.destroy();
      return unit;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
