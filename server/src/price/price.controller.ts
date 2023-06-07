import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import CreatePriceDto from './dto/create-price.dto';
import { Price } from './price.model';
import { PriceService } from './price.service';

@ApiTags('Цены на складах')
@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @ApiOperation({ summary: 'Создание цены' })
  @ApiResponse({ status: 201, type: Price })
  @ApiResponse({ status: 404, description: 'Ошибка валидации' })
  @Post()
  create(@Body() priceDto: CreatePriceDto) {
    console.log(priceDto);
    return this.priceService.createPrice(priceDto);
  }

  @ApiOperation({ summary: 'Получаем список цен' })
  @ApiResponse({ status: 200, type: [Price] })
  @ApiResponse({
    status: 404,
    description: 'Список цен пуст' || 'Произошла ошибка',
  })
  @Get()
  findAll() {
    return this.priceService.getAllPrices();
  }

  @ApiOperation({ summary: 'Получаем по id' })
  @ApiResponse({ status: 200, type: Price })
  @ApiResponse({
    status: 404,
    description: 'Цена не найдена' || 'Произошла ошибка',
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.priceService.findPriceOneById(id);
  }

  @ApiOperation({ summary: 'Удаляем цену' })
  @ApiResponse({ status: 200, type: Price })
  @ApiResponse({
    status: 404,
    description: 'Цена не найдена' || 'Произошла ошибка',
  })
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.priceService.deletePrice(id);
  }

  @ApiOperation({ summary: 'Обновляем цену' })
  @ApiResponse({ status: 200, type: Price })
  @ApiResponse({
    status: 404,
    description: 'Цена не найдена' || 'Произошла ошибка',
  })
  @Post(':id')
  update(@Param('id') id: number, @Body() priceDto: CreatePriceDto) {
    return this.priceService.updatePrice(id, priceDto);
  }
}
