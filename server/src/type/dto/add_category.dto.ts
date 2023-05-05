import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class AddCategoryDto {
  @ApiProperty({ example: '1', description: 'ID типа' })
  readonly id: number;
  @ApiProperty({ example: 'Краны', description: 'Наименование категории' })
  readonly name: string;
}
