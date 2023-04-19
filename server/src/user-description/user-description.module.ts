import { Module } from '@nestjs/common';
import { UserDescriptionService } from './user-description.service';
import { UserDescriptionController } from './user-description.controller';

@Module({
  providers: [UserDescriptionService],
  controllers: [UserDescriptionController]
})
export class UserDescriptionModule {}
