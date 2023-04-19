import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class AddRoleDto {
  @ApiProperty({ example: '1', description: 'ID пользователя' })
  readonly id: number;
  @ApiProperty({ example: 'admin', description: 'Наименование роли' })
  readonly name: string;
}
