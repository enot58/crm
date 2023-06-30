import { ApiProperty } from '@nestjs/swagger';
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

@Table({ tableName: 'type', paranoid: true })
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

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @BelongsToMany(() => Category, () => TypeCategory)
  categories: Category[];
}
