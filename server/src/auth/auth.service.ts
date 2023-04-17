import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: CreateUserDto) {
    try {
      const candidate = await this.userService.findUserByLogin(userDto.login);

      // Проверяем есть ли в БД такой логин
      if (candidate) {
        throw new HttpException(
          'Пользователь с таким логином уже существует',
          HttpStatus.BAD_REQUEST,
        );
      }

      // Если нет хэшируем пароль
      const hashPassword = await bcrypt.hash(userDto.password, 5);
      // Создаём пользователя
      const { user } = await this.userService.createUser({
        ...userDto,
        password: hashPassword,
      });
      // Создаём токен для пользователя
      return this.generateToken(user);
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

  private async generateToken(user: User) {
    const payload = { login: user.login, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: CreateUserDto) {
    const user = await this.userService.findUserByLogin(userDto.login);
    if (!user) {
      throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
    }
    // Сравниваем пароли
    const passwordEquals = await bcrypt.compare(
      userDto.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }

    throw new UnauthorizedException({ message: 'Неверный логин или пароль' });
  }
}
