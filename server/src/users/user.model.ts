import { UserDescription } from './../user-description/user-description.model';
/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  Model,
  DataType,
  BelongsToMany,
  HasOne,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-role.model';

export interface UserCreationAttrs {
  login: string;
  password: string;
  roles: Role[];
  userDescriptions: UserDescription[];
}

@Table({ tableName: 'users', paranoid: true })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'admin', description: 'Логин' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  login: string;
  @ApiProperty({ example: 'admin', description: 'Пароль' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasOne(() => UserDescription)
  userDescriptions: UserDescription[];
}
