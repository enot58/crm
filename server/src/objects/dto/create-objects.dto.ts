import { ApiProperty } from '@nestjs/swagger';

class CreateObjectsDto {
  @ApiProperty({ example: 'Зеландия', description: 'Наименование объекта' })
  name: string;
  @ApiProperty({
    example: 'г.Пенза ул. Гагарина',
    description: 'Адрес объекта',
  })
  address: string;
  // @ApiProperty({ example: 'Файл', description: 'Файл' })
  // img: any;
}

export default CreateObjectsDto;
