import { ApiProperty } from '@nestjs/swagger';

export class CreateProviderDto {
  @ApiProperty({ example: 'Эльф', description: 'Наименование' })
  readonly name: string;
  @ApiProperty({ example: 'г.Тула', description: 'Адрес' })
  readonly address: string;
}
