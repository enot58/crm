import { AddRoleDto } from './dto/add_role.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, UseGuards } from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
import { CreateUserWithRoleDto } from './dto/create-user-with-role.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    console.log('create');
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Создать и присвоить одну роль' })
  @ApiResponse({ status: 200, type: User })
  @Post('/createWithRole')
  createWithRole(@Body() userDto: CreateUserWithRoleDto) {
    console.log('createWithRole');
    return this.userService.createWithRole(userDto);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200, type: User })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    console.log('addRole');
    return this.userService.addRoleToUser(dto);
  }

  @ApiOperation({ summary: 'Удалить роль' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/delRole')
  delRole(@Body() dto: AddRoleDto) {
    console.log('delRole');
    return this.userService.delRoleToUser(dto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    console.log('findAll');
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получить пользователя по id' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  findOne(@Param('id') id: number) {
    console.log('findOne');
    return this.userService.findUserOneById(id);
  }

  @ApiOperation({ summary: 'Получить пользователя по наименованию' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('findByLogin/:login')
  findByName(@Param('login') login: string) {
    console.log('findByName');
    return this.userService.findUserByLogin(login);
  }

  @ApiOperation({ summary: 'Удалить пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    console.log('deleteUser');
    return this.userService.deleteUser(id);
  }
}
