import { Model, Table, Column, DataType } from 'sequelize-typescript';

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
}
