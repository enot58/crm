import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({ name: 'Краны', description: 'Тип категорий' })
  name: string;
}
