import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ProductName } from 'src/product-name/product-name.model';
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
}
