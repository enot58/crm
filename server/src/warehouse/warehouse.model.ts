import { ApiProperty } from '@nestjs/swagger';

import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ObjectsWarehouse } from 'src/objects-building/object-warehouse.model';
import { ObjectsBuilding } from 'src/objects-building/objects-building.model';
import { Price } from 'src/price/price.model';
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

  @BelongsToMany(() => ObjectsBuilding, () => ObjectsWarehouse)
  objectsBuildings: ObjectsBuilding[];
}
