import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from './user-role.model';
import { User } from 'src/users/user.model';
import { Role } from './roles.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([UserRoles, User, Role])],
  exports: [RolesService],
})
export class RolesModule {}
