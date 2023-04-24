import { FilesModule } from './../files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module, forwardRef } from '@nestjs/common';
import { UserDescriptionService } from './user-description.service';
import { UserDescriptionController } from './user-description.controller';
import { User } from 'src/users/user.model';
import { UserDescription } from './user-description.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  providers: [UserDescriptionService],
  controllers: [UserDescriptionController],
  imports: [
    SequelizeModule.forFeature([User, UserDescription]),
    FilesModule,
    AuthModule,
  ],
})
export class UserDescriptionModule {}
