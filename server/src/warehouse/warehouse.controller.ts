import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { WarehouseService } from './warehouse.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @ApiOperation({ summary: 'Получить склад по id' })
  @ApiResponse({ status: 200, type: Warehouse })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Get(':id')
  getAllWarehouses(@Param('id') id: number) {
    return this.warehouseService.findWarehouseOneById(id);
  }

  @ApiOperation({ summary: 'Обновить склад' })
  @ApiResponse({ status: 200, type: Warehouse })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateWarehouseDto) {
    return this.warehouseService.updateWarehouse(id, dto);
  }
}
