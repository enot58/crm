import { ApiProperty } from '@nestjs/swagger';

import {
  BelongsToMany,
  HasMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Price } from 'src/price/price.model';
import { ProductName } from 'src/product-name/product-name.model';
import { StockResidue } from 'src/stock-residue/stock-residue.model';

export interface WarehouseCreationAttr {
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
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  name: string;

  @ApiProperty({ example: 'Москва', description: 'Адрес склада' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @BelongsToMany(() => Price, () => StockResidue)
  prices: Price[];
}
