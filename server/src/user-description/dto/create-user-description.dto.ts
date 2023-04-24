import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateUserDescriptionDto {
  @ApiProperty({ example: 'Иван', description: 'Имя пользователя' })
  readonly name?: string;
  @ApiProperty({ example: 'Иванов', description: 'Фамилия пользователя' })
  readonly lastName?: string;
  @ApiProperty({ example: 'img', description: 'Изображение' })
  readonly image?: string;
  @ApiProperty({ example: 'Мастер', description: 'Должность' })
  readonly post?: string;
  @ApiProperty({ example: 'email@email.ru', description: 'Почта пользователя' })
  readonly email?: string;
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  readonly idUser: number;
}
