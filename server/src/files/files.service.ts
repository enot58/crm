import { Injectable, HttpException } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file: any): Promise<string> {
    try {
      const fileName = uuid.v4() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');
      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);
      return fileName;
    } catch (e) {
      console.error(e);
      throw new HttpException(
        'Произошла ошибка',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteFile(file: any): Promise<void> {
    // Проверяем что файл существует
    const filePath = path.resolve(__dirname, '..', 'static', file);
    if (fs.existsSync(filePath)) {
      // Удаляем файл
      fs.unlinkSync(filePath);
      throw new HttpException('Файл удален', HttpStatus.OK);
    }
    // Если файл не существует, то выбрасываем ошибку
    if (!fs.existsSync(filePath)) {
      throw new HttpException('Файл не найден', HttpStatus.NOT_FOUND);
    }
  }
}
