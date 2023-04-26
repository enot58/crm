import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { WarehouseService } from './warehouse.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Warehouse } from './warehouse.model';

@ApiTags('Склад')
@Controller('warehouse')
export class WarehouseController {
  constructor(private warehouseService: WarehouseService) {}

  @ApiOperation({ summary: 'Создание склада' })
  @ApiResponse({ status: 200, type: Warehouse })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post()
  create(@Body() dto: CreateWarehouseDto) {
    return this.warehouseService.createWarehouse(dto);
  }
  @ApiOperation({ summary: 'Получить все склады' })
  @ApiResponse({ status: 200, type: [Warehouse] })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Get()
  getAll() {
    return this.warehouseService.getAllWarehouses();
  }
}
