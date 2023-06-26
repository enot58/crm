import { ApiProperty } from '@nestjs/swagger';

import {
  BelongsToMany,
  Column,
  DataType,
  Table,
  Model,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';
import { UserRoles } from './user-role.model';

interface RoleCreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: 'roles', paranoid: true })
export class Role extends Model<Role, RoleCreationAttr> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'admin', description: 'Наименование роли' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
