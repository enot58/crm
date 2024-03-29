import { Roles } from './../auth/roles-auth.decorator';
import { TypeService } from './type.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UseGuards,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { Type } from './type.model';
import { CreateTypeDto } from './dto/type.dto';
import { RolesGuard } from 'src/auth/roles.guards';
import { AddCategoryDto } from './dto/add_category.dto';

@ApiTags('Типы для оборудования')
@Controller('type')
export class TypeController {
  constructor(private typeService: TypeService) {}

  @ApiOperation({ summary: 'Получение всех типов' })
  @ApiResponse({ status: HttpStatus.OK, type: [Type] })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.typeService.getAllTypes();
  }

  @ApiOperation({ summary: 'Создание типа для оборудования' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateTypeDto) {
    return this.typeService.createType(dto);
  }

  @ApiOperation({ summary: 'Получение типа по наименованию' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  @Get('/byName')
  getTypeByName(@Query('name') name: string) {
    return this.typeService.findByName(name);
  }

  @ApiOperation({ summary: 'Добавить категорию в тип' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Тип или категория не найдены',
  })
  @Post('/categoryToType')
  addCategory(@Body() dto: AddCategoryDto) {
    return this.typeService.addCategoryToType(dto);
  }

  @ApiOperation({ summary: 'Удалить категорию из типа' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Тип или категория не найдены',
  })
  @Post('/delCategoryToType')
  deleteCategory(@Body() dto: AddCategoryDto) {
    return this.typeService.deleteCategoryFromType(dto);
  }

  @ApiOperation({ summary: 'Получение типа по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Get(':id')
  getTypeById(@Param('id') id: number) {
    return this.typeService.getTypeById(id);
  }

  @ApiOperation({ summary: 'Редактирование типа по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Put(':id')
  updateTypeById(@Param('id') id: number, @Body() dto: CreateTypeDto) {
    return this.typeService.updateType(id, dto);
  }

  @ApiOperation({ summary: 'Удаление типа по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Type })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Delete(':id')
  deleteTypeById(@Param('id') id: number) {
    return this.typeService.deleteType(id);
  }
}
