import { CreateProviderDto } from './dto/provider.dto';
import { Provider } from './provider.model';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  HttpStatus,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProviderService } from './provider.service';

@ApiTags('Поставщики')
@Controller('provider')
export class ProviderController {
  constructor(private providerService: ProviderService) {}

  @ApiOperation({ summary: 'Создание поставщика' })
  @ApiResponse({ status: 201, type: Provider })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Post()
  createProvider(@Body() dto: CreateProviderDto) {
    return this.providerService.createProvider(dto);
  }

  @ApiOperation({ summary: 'Получить всех поставщиков' })
  @ApiResponse({ status: HttpStatus.CREATED, type: [Provider] })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Get()
  getAll() {
    return this.providerService.getAllProviders();
  }

  @ApiOperation({ summary: 'Получить поставщика по id' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Provider })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Get(':id')
  getAllObjectsBuilding(@Param('id') id: number) {
    return this.providerService.getProvidersById(id);
  }

  @ApiOperation({ summary: 'Обновить поставщика' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Provider })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Put(':id')
  update(@Param('id') id: number, @Body() dto: CreateProviderDto) {
    return this.providerService.editProvider(id, dto);
  }

  @ApiOperation({ summary: 'Удалить поставщика' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Provider })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'NOT_FOUND' })
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.providerService.delProviderById(id);
  }
}
