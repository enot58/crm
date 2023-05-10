import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductName } from 'src/product-name/product-name.model';
import { Warehouse } from 'src/warehouse/warehouse.model';

interface PriceAttrs {
  value: number;
  productNameId: number;
  warehouseId?: number;
}

@Table({ tableName: 'price' })
export class Price extends Model<Price, PriceAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  value: number;

  @ForeignKey(() => ProductName)
  @Column({ type: DataType.INTEGER })
  productNameId: number;

  @ForeignKey(() => Warehouse)
  @Column({ type: DataType.INTEGER, allowNull: true })
  warehouseId?: number;
}
