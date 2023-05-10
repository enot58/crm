import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductName } from './product-name.model';
import { ProductNameService } from './product-name.service';

@ApiTags('Товары')
@Controller('product-name')
export class ProductNameController {
  constructor(private productNameService: ProductNameService) {}

  @ApiOperation({ summary: 'Получить список товаров' })
  @ApiResponse({ status: 200, type: [ProductName] })
  @ApiResponse({
    status: 404,
    description: 'Не удалось получить список товаров',
  })
  @Get()
  findAll() {
    return this.productNameService.getAllProductNames();
  }

  @ApiOperation({ summary: 'Создание товара без категории' })
  @ApiResponse({ status: 201, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось создать товар' })
  @Post()
  create(@Body() dto: ProductName) {
    return this.productNameService.createProductName(dto);
  }

  @ApiOperation({ summary: 'Создание товара (по наименованию категории)' })
  @ApiResponse({ status: 201, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось создать товар' })
  @Post('category-name')
  createCategoryByName(@Body() dto: ProductName) {
    return this.productNameService.createProductWithName(dto);
  }

  @ApiOperation({ summary: 'Создание товара (категории с id)' })
  @ApiResponse({ status: 201, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось создать товар' })
  @Post('category/:id')
  createCategoryById(@Param('id') id: number, @Body() dto: ProductName) {
    return this.productNameService.createProductWithCategoryId(id, dto);
  }

  @ApiOperation({ summary: 'Получить товар по id' })
  @ApiResponse({ status: 200, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось получить товар' })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.productNameService.getProductNameById(id);
  }

  @ApiOperation({ summary: 'Редактировать товар' })
  @ApiResponse({ status: 200, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось редактировать товар' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: ProductName) {
    return this.productNameService.updateProductName(id, dto);
  }

  @ApiOperation({ summary: 'Удалить товар' })
  @ApiResponse({ status: 200, type: ProductName })
  @ApiResponse({ status: 404, description: 'Не удалось удалить товар' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productNameService.deleteProductName(id);
  }
}
