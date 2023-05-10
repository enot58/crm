import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import CreateUnitDto from './dto/create-unit.dto';
import { Unit } from './unit.model';
import { UnitService } from './unit.service';

@ApiTags('Еденицы измерения')
@Controller('unit')
export class UnitController {
  constructor(private unitService: UnitService) {}

  @ApiOperation({ summary: 'Создание еденицы измерения' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Unit })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Post()
  create(@Body() dto: CreateUnitDto) {
    return this.unitService.createUnit(dto);
  }

  @ApiOperation({ summary: 'Получить все еденицы измерения' })
  @ApiResponse({ status: HttpStatus.OK, type: [Unit] })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Get()
  getAll() {
    return this.unitService.getAllUnits();
  }

  @ApiOperation({ summary: 'Получить еденицу по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Unit })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Get(':id')
  getAllObjectsBuilding(@Param('id') id: number) {
    return this.unitService.getUnitById(id);
  }

  @ApiOperation({ summary: 'Обновить еденицу' })
  @ApiResponse({ status: HttpStatus.OK, type: Unit })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateUnitDto) {
    return this.unitService.updateUnit(id, dto);
  }

  @ApiOperation({ summary: 'Удалить еденицу' })
  @ApiResponse({ status: HttpStatus.OK, type: Unit })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.unitService.deleteUnit(id);
  }
}
