import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductName } from 'src/product-name/product-name.model';
import { StockResidue } from 'src/stock-residue/stock-residue.model';
import { Warehouse } from 'src/warehouse/warehouse.model';
import { Price } from './price.model';

@Table({ tableName: 'product_price' })
export class ProductPrice extends Model<ProductPrice> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => ProductName)
  @Column({ type: DataType.INTEGER })
  productNameId: number;

  @ForeignKey(() => Price)
  @Column({ type: DataType.INTEGER })
  priceId: number;

  @BelongsToMany(() => Warehouse, () => StockResidue)
  warehouses: Warehouse[];
}
