import { CreateCategoryDto } from './dto/category.dto';
import { Roles } from './../auth/roles-auth.decorator';
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
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guards';
import { CategoryService } from './category.service';
import { Category } from './category.model';

@ApiTags('Категории для оборудования')
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Создание Категории для оборудования' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Category })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateCategoryDto) {
    return this.categoryService.createCategory(dto);
  }

  @ApiOperation({ summary: 'Получение всех типов' })
  @ApiResponse({ status: HttpStatus.OK, type: [Category] })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.categoryService.getAllCategories();
  }

  @ApiOperation({ summary: 'Получение Категории по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Category })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Get(':id')
  getTypeById(@Param('id') id: number) {
    return this.categoryService.getCategoryById(id);
  }

  @ApiOperation({ summary: 'Редактирование Категории по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Category })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Put(':id')
  updateTypeById(@Param('id') id: number, @Body() dto: CreateCategoryDto) {
    return this.categoryService.updateCategory(id, dto);
  }

  @ApiOperation({ summary: 'Удаление Категории по id' })
  @ApiResponse({ status: HttpStatus.OK, type: Category })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Ошибка валидации',
  })
  //   @Roles('admin')
  //   @UseGuards(RolesGuard)
  @Delete(':id')
  deleteTypeById(@Param('id') id: number) {
    return this.categoryService.deleteCategory(id);
  }
}
