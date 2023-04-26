import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreateUserDescriptionDto } from './dto/create-user-description.dto';
import { UserDescription } from './user-description.model';

@Injectable()
export class UserDescriptionService {
  constructor(
    @InjectModel(UserDescription)
    private userDescriptionRepository: typeof UserDescription,
    private fileService: FilesService,
  ) {}

  async createUserDescription(dto: CreateUserDescriptionDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const userDescription = await this.userDescriptionRepository.create({
      ...dto,
      image: fileName,
    });
    return userDescription;
  }

  async getAllUserDescriptions() {
    const userDescriptions = await this.userDescriptionRepository.findAll();
    return userDescriptions;
  }

  async findUserDescriptionOneById(id: number) {
    const userDescription = await this.userDescriptionRepository.findByPk(id);

    return userDescription;
  }

  async deleteUserDescription(id: number) {
    const userDescription = await this.userDescriptionRepository.findByPk(id);
    const { image } = userDescription.dataValues;
    if (userDescription) {
      await userDescription.destroy();
    }

    if (userDescription && image) {
      await this.fileService.deleteFile(image);
    }

    return userDescription;
  }

  async updateUserDescription(
    id: number,
    dto: CreateUserDescriptionDto,
    image: string,
  ) {
    // Создаём файл
    const fileName = await this.fileService.createFile(image);
    // Получаем информацию
    const userDescription = await this.userDescriptionRepository.findByPk(id);
    const oldImg = userDescription.image;

    console.log(`Старый ${oldImg}`);
    userDescription.name = dto.name;
    userDescription.lastName = dto.lastName;
    // Здесь меняем наименование
    userDescription.image = fileName;
    userDescription.post = dto.post;
    userDescription.email = dto.email;

    await userDescription.save().then(() => {
      // Удаляем старый файл
      this.fileService.deleteFile(oldImg);
    });

    return userDescription;
  }

  async findUserDescriptionByName(name: string) {
    const userDescription = await this.userDescriptionRepository.findOne({
      where: { name },
    });
    return userDescription;
  }

  async findUserDescriptionByEmail(email: string) {
    const userDescription = await this.userDescriptionRepository.findOne({
      where: { email },
    });
    return userDescription;
  }
}
