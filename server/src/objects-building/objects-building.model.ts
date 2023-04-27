import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

export interface ObjectsBuildingCreationAttr {
  name: string;
  address: string;
}

@Table({ tableName: 'objects_building' })
export class ObjectsBuilding extends Model<
  ObjectsBuilding,
  ObjectsBuildingCreationAttr
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Лугометрия', description: 'Название объекта' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: 'Москва', description: 'Адрес объекта' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;
}
