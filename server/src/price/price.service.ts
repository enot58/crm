import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { create } from 'domain';
import { ProductName } from 'src/product-name/product-name.model';
import { ProductNameService } from 'src/product-name/product-name.service';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { WarehouseService } from 'src/warehouse/warehouse.service';
import CreatePriceDto from './dto/create-price.dto';
import { Price } from './price.model';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(Price)
    private priceRepository: typeof Price,
    @InjectModel(ProductName)
    private readonly productNameRepository: typeof ProductName,
    @InjectModel(Warehouse)
    private readonly warehouseRepository: typeof Warehouse,

    private readonly warehouseService: WarehouseService,
    private readonly productNameService: ProductNameService,
  ) {}
  async createPrice(dto: CreatePriceDto) {
    try {
      const { productNameId: id } = dto;
      // Ищем товар
      const product = await this.productNameService.getProductNameById(id);
      if (!product) {
        throw new HttpException('Товар не найден', HttpStatus.NOT_FOUND);
      }
      // Создаём цену
      const price = await this.priceRepository.create(dto);
      if (!price || price === undefined) {
        throw new HttpException('Произошла ошибка', HttpStatus.BAD_REQUEST);
      }
      // Присваиваем цену товару
      await product.$set('prices', price);

      return price;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getAllPrices() {
    try {
      const prices = await this.priceRepository.findAll();
      return prices;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findPriceOneById(id: number) {
    try {
      const price = await this.priceRepository.findByPk(id);
      if (!price) {
        throw new NotFoundException('Цена не найдена');
      }
      return price;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async deletePrice(id: number) {
    try {
      const price = await this.priceRepository.destroy({ where: { id } });
      return price;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async updatePrice(id: number, dto: CreatePriceDto) {
    try {
      const price = await this.priceRepository.findByPk(id);
      if (!price) {
        throw new NotFoundException('Цена не найдена');
      }
      price.value = dto.value;
      await price.save();
      return price;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
