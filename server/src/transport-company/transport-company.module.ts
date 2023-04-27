import { Module } from '@nestjs/common';
import { TransportCompanyService } from './transport-company.service';
import { TransportCompanyController } from './transport-company.controller';

@Module({
  providers: [TransportCompanyService],
  controllers: [TransportCompanyController]
})
export class TransportCompanyModule {}
