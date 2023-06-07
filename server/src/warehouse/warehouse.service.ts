import {
  Injectable,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Warehouse } from './warehouse.model';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';

@Injectable()
export class WarehouseService {
  constructor(
    @InjectModel(Warehouse)
    private warehouseRepository: typeof Warehouse,
  ) {}

  // Создаём склад
  async createWarehouse(dto: CreateWarehouseDto) {
    const warehouse = await this.warehouseRepository.create(dto);
    return warehouse;
  }

  // Получаем все склады
  async getAllWarehouses() {
    try {
      const warehouses = await this.warehouseRepository.findAll({
        include: {
          all: true,
        },
      });
      if (!warehouses) {
        throw new HttpException('Склады не найдены', HttpStatus.NOT_FOUND);
      }
      return warehouses;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем склад по id
  async findWarehouseOneById(id: number) {
    try {
      const warehouse = await this.warehouseRepository.findByPk(id);
      if (!warehouse) {
        throw new HttpException('Склад не найден', HttpStatus.NOT_FOUND);
      }
      return warehouse;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем склад
  async updateWarehouse(id: number, dto: CreateWarehouseDto) {
    try {
      const warehouse = await this.warehouseRepository.findByPk(id);
      if (!warehouse) {
        throw new HttpException('Склад не найден', HttpStatus.NOT_FOUND);
      }
      warehouse.name = dto.name;
      warehouse.address = dto.address;

      await warehouse.save();
      return warehouse;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
