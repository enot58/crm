import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductName } from 'src/product-name/product-name.model';
import { Warehouse } from 'src/warehouse/warehouse.model';

export interface StockResidueAttributes {
  amount: number;
}
@Table({ tableName: 'stock_residue' })
export class StockResidue extends Model<StockResidue, StockResidueAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({
    example: '20',
    description: 'Количество',
  })
  @Column({ type: DataType.INTEGER, allowNull: true })
  amount: number;

  @ForeignKey(() => ProductName)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @ForeignKey(() => Warehouse)
  @Column({ type: DataType.INTEGER })
  warehouseId: number;
}
