import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Price } from 'src/price/price.model';
import { PriceService } from 'src/price/price.service';
import { ProductName } from 'src/product-name/product-name.model';
import { ProductNameService } from 'src/product-name/product-name.service';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { WarehouseService } from 'src/warehouse/warehouse.service';
import CreateStockResidueDto from './dto/create-stock-residue.dto';
import { StockResidue } from './stock-residue.model';

@Injectable()
export class StockResidueService {
  constructor(
    @InjectModel(StockResidue)
    private stockResidueRepository: typeof StockResidue,
    @InjectModel(Warehouse)
    private warehouseRepository: typeof Warehouse,
    @InjectModel(Price)
    private priceRepository: typeof Price,
    @InjectModel(ProductName)
    private productNameRepository: typeof ProductName,

    private readonly warehouseService: WarehouseService,
    private readonly productNameService: ProductNameService,
    private readonly priceService: PriceService,
  ) {}
  async createStockResidue(dto: CreateStockResidueDto) {
    try {
      // Принимаем dto
      // Создаём связку цена/товар и получаем id таблицы
      const { price, productNameId: id } = dto;
      const dtoPrice = {
        value: price,
        productNameId: id,
      };
      const { amount, warehouseId } = dto;
      // Проверяем существование склада
      const warehouse = await this.warehouseService.findWarehouseOneById(
        warehouseId,
      );
      if (!warehouse) {
        throw new HttpException(
          'Не удалось найти склад',
          HttpStatus.BAD_REQUEST,
        );
      }
      // Получаем id product/price
      const productPrice = await this.priceService.createPrice(dtoPrice);
      //Если не удалось установить цену, возвращаем ошибку
      if (!productPrice || productPrice === undefined) {
        throw new HttpException(
          'Не удалось установить цену',
          HttpStatus.BAD_REQUEST,
        );
      }
      // Присваиваем цену товару и остатки
      const stockResidue = await this.stockResidueRepository.create({
        amount,
        priceId: productPrice.id,
        warehouseId: warehouse.id,
      });
      // Присваиваем склад
      // Присваиваем товар/цену
      // const x = await productPrice.$set('warehouses', [warehouse.id]);
      // console.log(x);
      // // Присваиваем склад
      // await warehouse.$set('prices', [productPrice.id]);
      // await stockResidue.$set('priceId', [productPrice.id]);

      return stockResidue;
    } catch (e) {
      console.log(e);
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const stockResidue = await this.stockResidueRepository.findAll({
        include: { all: true },
      });
      return stockResidue;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
