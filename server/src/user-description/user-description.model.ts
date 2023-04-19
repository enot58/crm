import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  DataType,
  HasOne,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

interface UserDescriptionCreationAttrs {
  name?: string;
  lastName?: string;
  image?: string;
  post?: string;
  email?: string;
}

@Table({ tableName: 'user_description' })
export class UserDescription extends Model<
  UserDescription,
  UserDescriptionCreationAttrs
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Иван', description: 'Имя Пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  name?: string;

  @ApiProperty({ example: 'Иванов', description: 'Фамилия Пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  lastName?: string;

  @ApiProperty({ example: 'img', description: 'Ссылка на фото' })
  @Column({ type: DataType.STRING, allowNull: true })
  image?: string;

  @ApiProperty({ example: 'email@email.ru', description: 'Почта Пользователя' })
  @Column({ type: DataType.STRING, allowNull: true })
  email?: string;

  @BelongsTo(() => User)
  userId: User;
}
