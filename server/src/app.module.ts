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

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      models: [UserRoles, User, Role],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    UserDescriptionModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
