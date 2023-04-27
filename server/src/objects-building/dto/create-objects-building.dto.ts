import { ApiProperty } from '@nestjs/swagger';

export class CreateObjectsDescriptionDto {
  @ApiProperty({ example: 'Главный', description: 'Название объекта' })
  readonly name: string;
  @ApiProperty({ example: 'Пенза', description: 'Адрес объекта' })
  readonly address: string;
}
