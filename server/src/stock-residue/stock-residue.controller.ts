import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import CreateStockResidueDto from './dto/create-stock-residue.dto';
import { StockResidue } from './stock-residue.model';
import { StockResidueService } from './stock-residue.service';

@Controller('stock-residue')
export class StockResidueController {
  constructor(private stockResidueService: StockResidueService) {}
  @ApiOperation({ summary: 'Получение всех записей без фильтра' })
  @ApiResponse({ status: HttpStatus.OK, type: [StockResidue] })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Не удалось получить данные',
  })
  @Get()
  getAllData() {
    return this.stockResidueService.findAll();
  }

  @ApiOperation({ summary: 'Постановка товара на склад' })
  @ApiResponse({ status: HttpStatus.CREATED, type: StockResidue })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Ошибка создания',
  })
  @Post()
  create(@Body() dto: CreateStockResidueDto) {
    return this.stockResidueService.createStockResidue(dto);
  }
}
