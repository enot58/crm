import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Price } from 'src/price/price.model';
import { Warehouse } from 'src/warehouse/warehouse.model';

export interface StockResidueAttributes {
  amount: number;
  priceId: number;
  warehouseId: number;
}
@Table({ tableName: 'stock_residue', paranoid: true })
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

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @ForeignKey(() => Price)
  @Column({ type: DataType.INTEGER })
  priceId: number;

  @ForeignKey(() => Warehouse)
  @Column({ type: DataType.INTEGER })
  warehouseId: number;
}
