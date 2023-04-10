import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from 'src/roles/user-role.model';
import { User } from './user.model';
import { Role } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([UserRoles, User, Role]), RolesModule],
})
export class UsersModule {}