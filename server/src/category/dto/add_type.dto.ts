import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class AddTypeDto {
  @ApiProperty({ example: '1', description: 'ID категории' })
  readonly id: number;
  @ApiProperty({ example: 'Канализация', description: 'Наименование типа' })
  readonly name: string;
}
