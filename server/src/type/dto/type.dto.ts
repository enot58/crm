import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
  @ApiProperty({ name: 'Водоснабжение', description: 'Тип категорий' })
  name: string;
}
