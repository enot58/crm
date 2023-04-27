import { Delete, Param } from '@nestjs/common/decorators';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Controller, HttpStatus, Post, Body, Get, Put } from '@nestjs/common';
import { TransportCompanyService } from './transport-company.service';
import { TransportCompany } from './transport-company.model';
import { CreateProviderDto } from 'src/provider/dto/provider.dto';
import { CreateTransportCompanyDto } from './dto/transport-company.dto';

@ApiTags('Транспортная компания')
@Controller('transport-company')
export class TransportCompanyController {
  constructor(private transportCompanyService: TransportCompanyService) {}

  @ApiOperation({ summary: 'Создание транспортной компании' })
  @ApiResponse({ status: HttpStatus.CREATED, type: TransportCompany })
  @Post()
  create(@Body() dto: TransportCompany) {
    return this.transportCompanyService.createTransportCompany(dto);
  }

  @ApiOperation({ summary: 'Получить все транспортные компании' })
  @ApiResponse({ status: HttpStatus.OK, type: [TransportCompany] })
  @Get()
  getAll() {
    return this.transportCompanyService.getAllTransportCompany();
  }

  @ApiOperation({ summary: 'Получить транспортную компанию по id' })
  @ApiResponse({ status: HttpStatus.OK, type: TransportCompany })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Get(':id')
  getAllTransportCompany(@Param('id') id: number) {
    return this.transportCompanyService.findTransportCompanyOneById(id);
  }

  @ApiOperation({ summary: 'Обновить транспортную компанию' })
  @ApiResponse({ status: HttpStatus.OK, type: TransportCompany })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateTransportCompanyDto) {
    return this.transportCompanyService.updateTransportCompany(id, dto);
  }

  @ApiOperation({ summary: 'Удалить транспортную компанию' })
  @ApiResponse({ status: HttpStatus.OK, type: TransportCompany })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.transportCompanyService.deleteTransportCompany(id);
  }
}
