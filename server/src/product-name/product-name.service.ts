import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CategoryService } from 'src/category/category.service';
import CreateProductDto from './dto/create-product.dto';
import { ProductName } from './product-name.model';

@Injectable()
export class ProductNameService {
  constructor(
    @InjectModel(ProductName)
    private productNameRepository: typeof ProductName,
    private categoryService: CategoryService,
  ) {}

  // Создаём продукт
  async createProductName(dto: CreateProductDto): Promise<ProductName> {
    try {
      const [productName, created] =
        await this.productNameRepository.findOrCreate({
          where: { name: dto.name },
          defaults: { ...dto },
        });
      if (!created) {
        throw new NotFoundException('Продукт с таким названием уже существует');
      }
      if (!productName) {
        throw new NotFoundException('Продукт не найден');
      }
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Создаём товар добавляя по id Category
  async createProductWithCategoryId(
    id: number,
    dto: CreateProductDto,
  ): Promise<ProductName> {
    try {
      const category = await this.categoryService.getCategoryById(id);
      if (!category) {
        throw new NotFoundException('Категория не найдена');
      }
      const productName = await this.createProductName(dto);
      await productName.$set('category', category);
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Создаём товар по названи
  async createProductWithName(dto: CreateProductDto): Promise<ProductName> {
    try {
      const productName = await this.categoryService.findCategoryByName(
        dto.categoryName,
      );

      if (!productName) {
        throw new NotFoundException('Категория не найдена');
      }
      const newProductName = await this.createProductName(dto);
      await newProductName.$set('category', productName);
      return newProductName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
  // Получим все продукты
  async getAllProductNames(): Promise<ProductName[]> {
    try {
      const productNames = await this.productNameRepository.findAll();
      return productNames;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получим продукт по id
  async getProductNameById(id: number): Promise<ProductName> {
    try {
      const productName = await this.productNameRepository.findByPk(id);
      if (!productName) {
        throw new NotFoundException('Продукт не найден');
      }
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удалим продукт
  async deleteProductName(id: number): Promise<ProductName> {
    try {
      const productName = await this.productNameRepository.findByPk(id);
      if (!productName) {
        throw new NotFoundException('Продукт не найден');
      }
      await productName.destroy();
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Обновим продукт
  async updateProductName(
    id: number,
    dto: CreateProductDto,
  ): Promise<ProductName> {
    try {
      const productName = await this.productNameRepository.findByPk(id);
      if (!productName) {
        throw new NotFoundException('Продукт не найден');
      }
      await productName.update(dto);
      if (dto.categoryName) {
        const category = await this.categoryService.findCategoryByName(
          dto.categoryName,
        );
        await productName.$set('category', category);
      }
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получим продукт по названию
  async getProductNameByName(name: string): Promise<ProductName> {
    try {
      const productName = await this.productNameRepository.findOne({
        where: { name },
      });
      if (!productName) {
        throw new NotFoundException('Продукт не найден');
      }
      return productName;
    } catch (e) {
      console.error(e);
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
