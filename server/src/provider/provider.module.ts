import { Provider } from './provider.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';

@Module({
  providers: [ProviderService],
  controllers: [ProviderController],
  imports: [SequelizeModule.forFeature([Provider])],
})
export class ProviderModule {}
