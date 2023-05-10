import { TypeCategory } from './type-category.model';
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import { Type } from 'src/type/type.model';
import { ProductName } from 'src/product-name/product-name.model';

interface CategoryCreationAttrs {
  name: string;
}

@Table({ tableName: 'category' })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Type, () => TypeCategory)
  type: Type[];

  @HasMany(() => ProductName)
  productNames: ProductName[];
}
