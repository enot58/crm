import { TransportCompany } from './transport-company.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { TransportCompanyService } from './transport-company.service';
import { TransportCompanyController } from './transport-company.controller';

@Module({
  providers: [TransportCompanyService],
  controllers: [TransportCompanyController],
  imports: [SequelizeModule.forFeature([TransportCompany])],
})
export class TransportCompanyModule {}
