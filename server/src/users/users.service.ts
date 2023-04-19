import { AddRoleDto } from './dto/add_role.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { RolesService } from 'src/roles/roles.service';
import { Role } from 'src/roles/roles.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private rolesService: RolesService,
  ) {}
  // Создаём пользователя
  async createUser(dto: CreateUserDto) {
    try {
      const role = await this.rolesService.findRoleByName('admin');
      if (!role) {
        throw new HttpException(
          'Роли с таким наименование не существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      const [user, created] = await this.userRepository.findOrCreate({
        where: { login: dto.login },
        defaults: {
          password: dto.password,
        },
      });
      if (!created) {
        throw new HttpException(
          'Пользователь с таким логином уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }
      //const user = await this.userRepository.create(dto);

      await user.$set('roles', [role.id]);
      user.roles = [role];

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
  // Получить всех пользователей
  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
  // Получить одного пользователя по id
  async findUserOneById(id: number) {
    const user = await this.userRepository.findByPk(id);
    return user;
  }
  // Добавить роль пользователю
  async addRoleToUser(dto: AddRoleDto) {
    const { id, name } = dto;
    const user = await this.userRepository.findByPk(id);
    const role = await this.rolesService.findRoleByName(name);
    if (user && role) {
      await user.$add('roles', role);
      return user;
    }
    throw new HttpException(
      'Пользователь или роль не существует',
      HttpStatus.NOT_FOUND,
    );
  }

  // Удалить роль пользователю
  async delRoleToUser(dto: AddRoleDto) {
    const { id, name } = dto;
    const user = await this.userRepository.findByPk(id);
    const role = await this.rolesService.findRoleByName(name);
    if (user && role) {
      await user.$remove('roles', role);
      return user;
    }
    throw new HttpException(
      'Пользователь или роль не существует',
      HttpStatus.NOT_FOUND,
    );
  }

  async findUserByLogin(login: string) {
    try {
      const user = await this.userRepository.findOne({
        where: { login },
        include: [{ model: Role }],
      });
      return user;
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
}
