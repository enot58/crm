import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.model';
import { Price } from 'src/price/price.model';
import { Unit } from 'src/unit/unit.model';

export interface ProductNameAttributes {
  name: string;
  description?: string;
}

@Table({ tableName: 'product_name', paranoid: true })
export class ProductName extends Model<ProductName, ProductNameAttributes> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({
    example: '11б27п',
    description: 'Наименование продукта',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Кран шаровой', description: 'Описание продукта' })
  @Column({ type: DataType.STRING, allowNull: true })
  description?: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER })
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => Unit)
  @Column({ type: DataType.INTEGER })
  unitId: number;
  @BelongsTo(() => Unit)
  unit: Unit;

  @HasMany(() => Price)
  prices: Price[];

  // @BelongsToMany(() => Warehouse, () => StockResidue)
  // stockWarehouses: Warehouse[];
}
