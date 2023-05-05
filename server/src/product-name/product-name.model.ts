import { Model, Table } from 'sequelize-typescript';

export interface ProductNameAttributes {
  name: string;
}

@Table({ tableName: 'product_name' })
export class ProductName extends Model<ProductName, ProductNameAttributes> {}
