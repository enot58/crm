import { UserDescription } from './user-description/user-description.model';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { UserRoles } from './roles/user-role.model';
import { User } from './users/user.model';
import { Role } from './roles/roles.model';
import { AuthModule } from './auth/auth.module';
import { UserDescriptionModule } from './user-description/user-description.module';
import { FilesModule } from './files/files.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Warehouse } from './warehouse/warehouse.model';
import { ObjectsBuildingModule } from './objects-building/objects-building.module';
import { StockResidueModule } from './stock-residue/stock-residue.module';

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
      models: [UserRoles, User, Role, UserDescription, Warehouse],
      autoLoadModels: true,
    }),
    WarehouseModule,
    UsersModule,
    RolesModule,
    AuthModule,
    UserDescriptionModule,
    FilesModule,
    ObjectsBuildingModule,
    StockResidueModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
