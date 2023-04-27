import { ApiProperty } from '@nestjs/swagger';

export class CreateTransportCompanyDto {
  @ApiProperty({ example: 'ТК', description: 'Наименование ТК' })
  readonly name: string;
  @ApiProperty({ example: 'г.Тула', description: 'Адрес склада ТК' })
  readonly address: string;
}
