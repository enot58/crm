import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { UserDescriptionModule } from './user-description/user-description.module';
import { FilesModule } from './files/files.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ObjectsBuildingModule } from './objects-building/objects-building.module';
import { StockResidueModule } from './stock-residue/stock-residue.module';
import { TransportCompanyModule } from './transport-company/transport-company.module';
import { ProviderModule } from './provider/provider.module';
import { CategoryModule } from './category/category.module';
import { TypeModule } from './type/type.module';
import { ProductNameModule } from './product-name/product-name.module';
import { UnitModule } from './unit/unit.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      models: [],
      autoLoadModels: true,
      synchronize: true,
    }),
    WarehouseModule,
    UsersModule,
    RolesModule,
    AuthModule,
    UserDescriptionModule,
    FilesModule,
    ObjectsBuildingModule,
    StockResidueModule,
    TransportCompanyModule,
    ProviderModule,
    CategoryModule,
    TypeModule,
    ProductNameModule,
    UnitModule,
    PriceModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
