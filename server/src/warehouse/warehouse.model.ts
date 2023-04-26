import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface WarehouseCreationAttr {
  name: string;
  address: string;
}

// Склад
@Table({ tableName: 'warehouse' })
export class Warehouse extends Model<Warehouse, WarehouseCreationAttr> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'Главный', description: 'Название склада' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Москва', description: 'Адрес склада' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;
}
