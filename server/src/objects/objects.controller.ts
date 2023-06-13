import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import CreateObjectsDto from './dto/create-objects.dto';
import { ObjectsService } from './objects.service';

@ApiTags('Объекты')
@Controller('objects')
export class ObjectsController {
  constructor(private objectService: ObjectsService) {}
  @ApiOperation({ summary: 'Создание объекта' })
  @ApiResponse({ status: 201, type: Object })
  @ApiResponse({ status: 404, description: 'Ошибка' })
  @Post()
  @UseInterceptors(FileInterceptor('img'))
  createObject(@Body() dto: CreateObjectsDto, @UploadedFile() image) {
    return this.objectService.createObject(dto, image);
  }

  @ApiOperation({ summary: 'Получение всех объектов' })
  @ApiResponse({ status: 200, type: Object })
  @ApiResponse({ status: 404, description: 'Ошибка' })
  @Get()
  findAllObjects() {
    return this.objectService.getAllObjects();
  }

  @ApiOperation({ summary: 'Получение объекта по id' })
  @ApiResponse({ status: 200, type: Object })
  @ApiResponse({ status: 404, description: 'Ошибка' })
  @Get(':id')
  getOneObjectById(@Param('id') id: number) {
    return this.objectService.getOneObjectById(id);
  }

  @ApiOperation({ summary: 'Удаление объекта по id' })
  @ApiResponse({ status: 200, type: Object })
  @ApiResponse({ status: 404, description: 'Ошибка' })
  @Get(':id')
  deleteOneObjectById(@Param('id') id: number) {
    return this.objectService.deleteObject(id);
  }

  @ApiOperation({ summary: 'Обновление объекта по id' })
  @ApiResponse({ status: 200, type: Object })
  @ApiResponse({ status: 404, description: 'Ошибка' })
  @Put(':id')
  updateObject(
    @Param('id') id: number,
    @Body() dto: CreateObjectsDto,
    @UploadedFile() image,
  ) {
    return this.objectService.updateObject(id, dto, image);
  }
}
