import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ObjectsCreationAttr {
  name: string;
  address: string;
  img?: string;
}

@Table({ tableName: 'objects' })
export class Objects extends Model<Objects, ObjectsCreationAttr> {
  @ApiProperty({ example: '1', description: 'Уникальный идентефикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Зеландия', description: 'Наименование' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'г.Пенза ул. Гагарина',
    description: 'Адрес объекта',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: 'Файл', description: 'Файл' })
  @Column({ type: DataType.STRING, allowNull: true })
  img?: any;
}
