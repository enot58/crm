import { ObjectsBuilding } from './objects-building.model';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateObjectsDescriptionDto } from './dto/create-objects-building.dto';
import { Warehouse } from 'src/warehouse/warehouse.model';
import AssignWarehouseDto from './dto/assign-warehouse.dto';

@Injectable()
export class ObjectsBuildingService {
  constructor(
    @InjectModel(ObjectsBuilding)
    private objectsBuildingRepository: typeof ObjectsBuilding,
    @InjectModel(Warehouse)
    private warehouseRepository: typeof Warehouse,
  ) {}

  // Создаём объект
  async createObjectsBuilding(dto: CreateObjectsDescriptionDto) {
    try {
      const objectsBuilding = await this.objectsBuildingRepository.create(dto);
      return objectsBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем все объекты
  async getAllObjectsBuilding() {
    try {
      const objectsBuilding = await this.objectsBuildingRepository.findAll({
        where: { deletedAt: null },
        include: { all: true },
      });
      if (!objectsBuilding) {
        throw new HttpException('Объекты не найдены', HttpStatus.NOT_FOUND);
      }
      return objectsBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем объект по id
  async findObjectsBuildingOneById(id: number) {
    try {
      const objectsBuilding = await this.objectsBuildingRepository.findByPk(id);
      if (!objectsBuilding) {
        throw new HttpException('Объект не найден', HttpStatus.NOT_FOUND);
      }
      return objectsBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Редактируем объект
  async updateObjectsBuilding(id: number, dto: CreateObjectsDescriptionDto) {
    try {
      const objectBuilding = await this.objectsBuildingRepository.findByPk(id);
      if (!objectBuilding) {
        throw new HttpException('Объект не найден', HttpStatus.NOT_FOUND);
      }

      objectBuilding.name = dto.name ? dto.name : objectBuilding.name;
      objectBuilding.address = dto.address
        ? dto.address
        : objectBuilding.address;
      await objectBuilding.save();
      return objectBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем объект
  async deleteObjectsBuilding(id: number) {
    try {
      const objectBuilding = await this.objectsBuildingRepository.findByPk(id);
      if (!objectBuilding) {
        throw new HttpException('Объект не найден', HttpStatus.NOT_FOUND);
      }
      await this.objectsBuildingRepository.destroy({ where: { id } });
      return objectBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Присвоим склад для объекта
  async assignWarehouse(id: number, dto: AssignWarehouseDto) {
    try {
      const objectBuilding = await this.objectsBuildingRepository.findByPk(id);
      if (!objectBuilding) {
        throw new HttpException('Объект не найден', HttpStatus.NOT_FOUND);
      }
      // Проверяем существование склада
      const warehouse = await this.warehouseRepository.findByPk(
        dto.warehouseId,
      );
      await objectBuilding.$set('warehouse', [warehouse.id]);
      return objectBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Изменям склад для объекта
  async changeWarehouse(id: number, dto: AssignWarehouseDto) {
    try {
      const objectBuilding = await this.objectsBuildingRepository.findByPk(id);
      if (!objectBuilding) {
        throw new HttpException('Объект не найден', HttpStatus.NOT_FOUND);
      }
      // Проверяем существование склада
      const warehouse = await this.warehouseRepository.findByPk(
        dto.warehouseId,
      );
      await objectBuilding.$add('warehouse', dto.warehouseId);
      return objectBuilding;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
