import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private roleRepository: typeof Role,
  ) {}

  async createRole(dto: CreateRoleDto) {
    const role = await this.roleRepository.create(dto);
    return role;
  }

  async getAllRoles() {
    try {
      const roles = await this.roleRepository.findAll();
      if (roles.length === 0) {
        throw new NotFoundException('Список ролей пуст');
      }
      return roles;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  async findRoleOneById(id: number) {
    try {
      const role = await this.roleRepository.findByPk(id);
      if (!role) {
        throw new NotFoundException('Роль не найдена');
      }
      return role;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  async deleteRole(id: number) {
    const role = await this.roleRepository.destroy({ where: { id } });
    return role;
  }

  async updateRole(id: number, dto: CreateRoleDto) {
    try {
      const role = await this.roleRepository.findByPk(id);
      if (!role) {
        throw new NotFoundException('Роль не найдена');
      }
      role.name = dto.name;
      role.description = dto.description;
      await role.save();
      return role;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }

  async findRoleByName(name: string) {
    try {
      const role = await this.roleRepository.findOne({ where: { name } });
      if (!role) {
        throw new NotFoundException('Роль c таким наименованием не найдена');
      }

      return role;
    } catch (e) {
      throw new NotFoundException(e.message || 'Произошла ошибка');
    }
  }
}
