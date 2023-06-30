import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TransportCompanyRepository {
  id: number;
  name: string;
  address: string;
}

@Table({ tableName: 'transport_company', paranoid: true })
export class TransportCompany extends Model<
  TransportCompany,
  TransportCompanyRepository
> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'ТК Деловые Линии', description: 'Название ТК' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Москва', description: 'Адрес склада ТК' })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({ example: '12.12.2022', description: 'Дата' })
  @Column({ type: DataType.DATE })
  deletedAt!: Date;
}
