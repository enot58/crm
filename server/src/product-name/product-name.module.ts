import { Module } from '@nestjs/common';
import { ProductNameController } from './product-name.controller';
import { ProductNameService } from './product-name.service';

@Module({
  controllers: [ProductNameController],
  providers: [ProductNameService],
})
export class ProductNameModule {}
