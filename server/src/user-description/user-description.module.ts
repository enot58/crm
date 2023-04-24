import { FilesModule } from './../files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserDescriptionService } from './user-description.service';
import { UserDescriptionController } from './user-description.controller';
import { User } from 'src/users/user.model';
import { UserDescription } from './user-description.model';

@Module({
  providers: [UserDescriptionService],
  controllers: [UserDescriptionController],
  imports: [SequelizeModule.forFeature([User, UserDescription]), FilesModule],
})
export class UserDescriptionModule {}
