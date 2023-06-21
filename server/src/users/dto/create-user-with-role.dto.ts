import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateUserWithRoleDto {
  @ApiProperty({ example: 'admin', description: 'Логин пользователя' })
  readonly login: string;
  @ApiProperty({ example: 'admin', description: 'Пароль пользователя' })
  readonly password: string;
  @ApiProperty({ example: 'user', description: 'Роль пользователя' })
  readonly role: string;
}
