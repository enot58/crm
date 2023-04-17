import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Роли')
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 201, type: Role })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  // Создаём роль
  @Post()
  create(@Body() roleDto: CreateRoleDto) {
    try {
      return this.rolesService.createRole(roleDto);
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  @ApiOperation({ summary: 'Получаем список ролей' })
  @ApiResponse({ status: 200, type: [Role] })
  @ApiResponse({
    status: 404,
    description: 'Список ролей пуст' || 'Произошла ошибка',
  })
  // Получаем список ролей
  @Get()
  findAll() {
    return this.rolesService.getAllRoles();
  }

  @ApiOperation({ summary: 'Получаем роль по наименованию' })
  @ApiResponse({ status: 200, type: Role })
  @Get('findByName/:name')
  findByName(@Param('name') name: string) {
    return this.rolesService.findRoleByName(name);
  }

  @ApiOperation({ summary: 'Получаем роль по id' })
  @ApiResponse({ status: 200, type: Role })
  // Получаем роль по id
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.rolesService.findRoleOneById(id);
  }

  @ApiOperation({ summary: 'Удаляем роль' })
  @ApiResponse({ status: 200, type: Role })
  // Удаляем роль
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.rolesService.deleteRole(id);
  }

  @ApiOperation({ summary: 'Обновляем роль' })
  @ApiResponse({ status: 201, type: Role })
  // Обновляем роль
  @Put(':id')
  update(@Param('id') id: number, @Body() roleDto: CreateRoleDto) {
    return this.rolesService.updateRole(id, roleDto);
  }
}
