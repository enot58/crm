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
      const warehouses = await this.warehouseRepository.findAll();
      if (!warehouses) {
        throw new HttpException('Склады не найдены', HttpStatus.NOT_FOUND);
      }
      return warehouses;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
