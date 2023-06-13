import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import CreateObjectsDto from './dto/create-objects.dto';
import { Objects } from './objects.model';

@Injectable()
export class ObjectsService {
  constructor(
    @InjectModel(Objects)
    private objectsRepository: typeof Objects,
    private fileService: FilesService,
  ) {}

  async createObject(dto: CreateObjectsDto, image: any) {
    try {
      const fileName = await this.fileService.createFile(image);
      const object = await this.objectsRepository.create({
        ...dto,
        img: fileName,
      });
      if (!object) {
        throw new HttpException(
          'Не удалось создать файл',
          HttpStatus.BAD_REQUEST,
        );
      }
      return object;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAllObjects() {
    try {
      return this.objectsRepository.findAll({ include: { all: true } });
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getOneObjectById(id: number) {
    try {
      const object = this.objectsRepository.findByPk(id);
      if (!object) {
        throw new HttpException(
          'Не удалось найти объект',
          HttpStatus.NOT_FOUND,
        );
      }
      return object;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateObject(id: number, dto: CreateObjectsDto, img: string) {
    try {
      const fileName = await this.fileService.createFile(img);
      // Получаем объект
      const object = await this.objectsRepository.findByPk(id);
      const oldImg = object.img;

      object.name = dto.name;
      object.address = dto.address;

      object.img = fileName;

      await object.save().then(() => {
        // Удаляем старый файл
        this.fileService.deleteFile(oldImg);
      });

      return object;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteObject(id: number) {
    try {
      const object = await this.objectsRepository.findByPk(id);
      if (!object) {
        throw new HttpException(
          'Не удалось найти объект',
          HttpStatus.NOT_FOUND,
        );
      }
      await object.destroy();
      return object;
    } catch (e) {
      throw new HttpException(
        e.message || 'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
