import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

export interface ProviderCreationAttr {
  name: string;
  address: string;
}

@Table({ tableName: 'provider', paranoid: true })
export class Provider extends Model<Provider, ProviderCreationAttr> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
  @ApiProperty({ example: 'Максима', description: 'Название поставщика' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;
  @ApiProperty({ example: 'Москва', description: 'Адрес поставщика' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;
}
