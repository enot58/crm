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
    const userDescription = await this.userDescriptionRepository.destroy({
      where: { id },
    });
    return userDescription;
  }

  async updateUserDescription(id: number, dto: CreateUserDescriptionDto) {
    const userDescription = await this.userDescriptionRepository.findByPk(id);
    userDescription.name = dto.name;
    userDescription.lastName = dto.lastName;
    userDescription.image = dto.image;
    userDescription.post = dto.post;
    userDescription.email = dto.email;
    await userDescription.save();
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
