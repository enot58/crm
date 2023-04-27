import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectsBuildingService } from './objects-building.service';
import { ObjectsBuilding } from './objects-building.model';

@ApiTags('Объекты')
@Controller('objects-building')
export class ObjectsBuildingController {
  constructor(private objectsBuildingService: ObjectsBuildingService) {}

  @ApiOperation({ summary: 'Создание объекта' })
  @ApiResponse({ status: 200, type: ObjectsBuilding })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Post()
  create(@Body() dto: ObjectsBuilding) {
    return this.objectsBuildingService.createObjectsBuilding(dto);
  }

  @ApiOperation({ summary: 'Получить все объекты' })
  @ApiResponse({ status: 200, type: [ObjectsBuilding] })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Get()
  getAll() {
    return this.objectsBuildingService.getAllObjectsBuilding();
  }

  @ApiOperation({ summary: 'Получить объект по id' })
  @ApiResponse({ status: 200, type: ObjectsBuilding })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Get(':id')
  getAllObjectsBuilding(@Param('id') id: number) {
    return this.objectsBuildingService.findObjectsBuildingOneById(id);
  }

  @ApiOperation({ summary: 'Обновить объект' })
  @ApiResponse({ status: 200, type: ObjectsBuilding })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: ObjectsBuilding) {
    return this.objectsBuildingService.updateObjectsBuilding(id, dto);
  }

  @ApiOperation({ summary: 'Удалить объект' })
  @ApiResponse({ status: 200, type: ObjectsBuilding })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.objectsBuildingService.deleteObjectsBuilding(id);
  }
}
