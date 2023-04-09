/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}

  async createUser(dto: CreateUserDto) {
    try {
      const role = await this.rolesService.findRoleByName('user');
      if (!role) {
        throw new HttpException(
          'Роли с таким наименование не существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      const [user, created] = await this.userRepository.findOrCreate({
        where: { login: dto.login },
      });
      if (!created) {
        throw new HttpException(
          'Пользователь с таким логином уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      //const user = await this.userRepository.create(dto);

      await user.$set('roles', [role.id]);

      return { user };
    } catch (e) {
      if (e instanceof HttpException) {
        throw e;
      } else {
        throw new HttpException(
          e.message || 'Произошла ошибка',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async findUserOneById(id: number) {
    const user = await this.userRepository.findByPk(id);
    return user;
  }
}
