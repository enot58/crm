import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.model';
import { TypeCategory } from 'src/category/type-category.model';

interface TypeCreationAttrs {
  name: string;
}

@Table({ tableName: 'type' })
export class Type extends Model<Type, TypeCreationAttrs> {
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

  @BelongsToMany(() => Category, () => TypeCategory)
  categories: Category[];
}
