import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ProductName } from 'src/product-name/product-name.model';

interface UnitAttrs {
  name: string;
}

@Table({ tableName: 'unit', paranoid: true })
export class Unit extends Model<Unit, UnitAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Шт.',
    description: 'Наименование единицы измерения',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;

  @HasMany(() => ProductName)
  productNames: ProductName[];
}
