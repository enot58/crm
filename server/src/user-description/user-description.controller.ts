import { UserDescription } from './user-description.model';
import { Controller, Body, Post, Get, UseInterceptors } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDescriptionDto } from './dto/create-user-description.dto';
import { UserDescriptionService } from './user-description.service';
import { UploadedFile } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Описание пользователя')
@Controller('user-description')
export class UserDescriptionController {
  constructor(private userDescriptionService: UserDescriptionService) {}
  @ApiOperation({ summary: 'Создание описания пользователя' })
  @ApiResponse({ status: 201, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Post()
  @UseInterceptors(FileInterceptor('img'))
  create(@Body() dto: CreateUserDescriptionDto, @UploadedFile() image) {
    return this.userDescriptionService.createUserDescription(dto, image);
  }

  @ApiOperation({ summary: 'Получение всех описаний пользователей' })
  @ApiResponse({ status: 200, type: UserDescription })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Get()
  findAllDescription() {
    return this.userDescriptionService.getAllUserDescriptions();
  }
}
