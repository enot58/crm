import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateUserDto {
  @ApiProperty({ example: 'admin', description: 'Логин пользователя' })
  readonly login: string;
  @ApiProperty({ example: 'admin', description: 'Пароль пользователя' })
  readonly password: string;
}
