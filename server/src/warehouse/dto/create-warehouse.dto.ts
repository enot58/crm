import { ApiProperty } from '@nestjs/swagger';

export class CreateWarehouseDto {
  @ApiProperty({ example: 'Главный', description: 'Название склада' })
  readonly name: string;
  @ApiProperty({ example: 'Москва', description: 'Адрес склада' })
  readonly address: string;
}
