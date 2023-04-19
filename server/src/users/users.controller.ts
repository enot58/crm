import { AddRoleDto } from './dto/add_role.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { ApiOperation } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guards';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    console.log(userDto);
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Выдать роль' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto) {
    return this.userService.addRoleToUser(dto);
  }

  @ApiOperation({ summary: 'Удалить роль' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/delRole')
  delRole(@Body() dto: AddRoleDto) {
    return this.userService.delRoleToUser(dto);
  }

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ status: 200, type: [User] })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  findAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Получить пользователя по наименованию' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('findByLogin/:login')
  findByName(@Param('login') login: string) {
    return this.userService.findUserByLogin(login);
  }
}
