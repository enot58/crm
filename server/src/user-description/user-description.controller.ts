import { RolesGuard } from 'src/auth/roles.guards';
import { Roles } from 'src/auth/roles-auth.decorator';
import { UserDescription } from './user-description.model';
import { Controller, Body, Post, Get, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDescriptionDto } from './dto/create-user-description.dto';
import { UserDescriptionService } from './user-description.service';
import {
  Delete,
  Param,
  UploadedFile,
  UseGuards,
} from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Описание пользователя')
@Controller('user-description')
export class UserDescriptionController {
  constructor(private userDescriptionService: UserDescriptionService) {}
  @ApiOperation({ summary: 'Создание описания пользователя' })
  @ApiResponse({ status: 201, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() dto: CreateUserDescriptionDto, @UploadedFile() image) {
    return this.userDescriptionService.createUserDescription(dto, image);
  }

  @ApiOperation({ summary: 'Получение всех описаний пользователей' })
  @ApiResponse({ status: 200, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  findAllDescription() {
    return this.userDescriptionService.getAllUserDescriptions();
  }

  @ApiOperation({ summary: 'Удаление описания пользователя' })
  @ApiResponse({ status: 200, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Delete(':id')
  deleteDescription(@Param('id') id: number) {
    return this.userDescriptionService.deleteUserDescription(id);
  }

  @ApiOperation({ summary: 'Получение описания пользователя по id' })
  @ApiResponse({ status: 200, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Get(':id')
  findOneDescription(@Param('id') id: number) {
    return this.userDescriptionService.findUserDescriptionOneById(id);
  }

  @ApiOperation({ summary: 'Обновление описания пользователя' })
  @ApiResponse({ status: 200, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @UseGuards(RolesGuard)
  @Post(':id')
  @UseInterceptors(FileInterceptor('img'))
  update(
    @Param('id') id: number,
    @Body() dto: CreateUserDescriptionDto,
    @UploadedFile() image,
  ) {
    return this.userDescriptionService.updateUserDescription(id, dto, image);
  }
}
