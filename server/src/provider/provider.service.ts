import {
  Injectable,
  HttpException,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Provider } from './provider.model';
import { CreateProviderDto } from './dto/provider.dto';

@Injectable()
export class ProviderService {
  constructor(
    @InjectModel(Provider)
    private providerRepository: typeof Provider,
  ) {}

  // Создаём поставщика
  async createProvider(dto: CreateProviderDto) {
    try {
      const provider = await this.providerRepository.create(dto);
      return provider;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем всех поставщиков
  async getAllProviders() {
    try {
      const providers = await this.providerRepository.findAll();
      return providers;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем однго поставщика
  async getProvidersById(id: number) {
    try {
      const provider = await this.providerRepository.findByPk(id);
      if (!provider) {
        throw new HttpException('Поставщик не найден', HttpStatus.NOT_FOUND);
      }
      return provider;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем поставщика
  async editProvider(id: number, dto: CreateProviderDto) {
    try {
      const provider = await this.providerRepository.findByPk(id);
      if (!provider) {
        throw new HttpException('Поставщик не найден', HttpStatus.NOT_FOUND);
      }
      provider.name = dto.name ? dto.name : provider.name;
      provider.address = dto.address ? dto.address : provider.address;
      await provider.save();
      return provider;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем по id
  async delProviderById(id: number) {
    try {
      const provider = await this.providerRepository.findByPk(id);
      if (!provider) {
        throw new HttpException('Поставщик не найден', HttpStatus.NOT_FOUND);
      }
      await provider.destroy();
      return provider;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
