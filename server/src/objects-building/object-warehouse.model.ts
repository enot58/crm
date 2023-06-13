import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { ObjectsBuilding } from './objects-building.model';

@Table({ tableName: 'objects-worhouse' })
export class ObjectsWarehouse extends Model<ObjectsWarehouse> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ForeignKey(() => ObjectsBuilding)
  @Column({
    type: DataType.INTEGER,
  })
  objectsBuildingId: number;

  @ForeignKey(() => Warehouse)
  @Column({
    type: DataType.INTEGER,
  })
  warehouseId: number;
}
