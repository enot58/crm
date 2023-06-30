import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  Table,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { ObjectsWarehouse } from './object-warehouse.model';

interface ObjectsBuildingCreationAttr {
  name: string;
  address: string;
}

@Table({ tableName: 'objects_building', paranoid: true })
export class ObjectsBuilding extends Model<
  ObjectsBuilding,
  ObjectsBuildingCreationAttr
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Лугометрия', description: 'Название объекта' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: 'Москва', description: 'Адрес объекта' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @BelongsToMany(() => Warehouse, () => ObjectsWarehouse)
  warehouse: Warehouse[];
}
