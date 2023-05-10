import { DataType, Model, Table } from 'sequelize-typescript';

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
}
