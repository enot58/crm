import { CreateTransportCompanyDto } from './dto/transport-company.dto';
import { TransportCompany } from './transport-company.model';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TransportCompanyService {
  constructor(
    @InjectModel(TransportCompany)
    private transportCompanyRepository: typeof TransportCompany,
  ) {}

  // Создаём TK
  async createTransportCompany(dto: CreateTransportCompanyDto) {
    try {
      const transportCompany = await this.transportCompanyRepository.create(
        dto,
      );
      return transportCompany;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем все TK
  async getAllTransportCompany() {
    try {
      const transportCompany = await this.transportCompanyRepository.findAll();
      return transportCompany;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Получаем TK по id
  async findTransportCompanyOneById(id: number) {
    try {
      const transportCompany = await this.transportCompanyRepository.findByPk(
        id,
      );
      if (!transportCompany) {
        throw new HttpException('ТК не найден', HttpStatus.NOT_FOUND);
      }
      return transportCompany;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Редактируем TK
  async updateTransportCompany(id: number, dto: CreateTransportCompanyDto) {
    try {
      const transportCompany = await this.transportCompanyRepository.findByPk(
        id,
      );
      if (!transportCompany) {
        throw new HttpException('ТК не найден', HttpStatus.NOT_FOUND);
      }

      transportCompany.name = dto.name ? dto.name : transportCompany.name;
      transportCompany.address = dto.address
        ? dto.address
        : transportCompany.address;
      await transportCompany.save();
      return transportCompany;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  // Удаляем TK
  async deleteTransportCompany(id: number) {
    try {
      const transportCompany = await this.transportCompanyRepository.findByPk(
        id,
      );
      if (!transportCompany) {
        throw new HttpException('ТК не найден', HttpStatus.NOT_FOUND);
      }
      await transportCompany.destroy();
      return transportCompany;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
