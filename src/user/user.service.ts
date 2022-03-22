import { EditUserDto } from './dto/edit-user.dto';
import { DatabaseService } from './../database/database.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private database: DatabaseService) {}
  async editUser(userId: number, dto: EditUserDto) {
    const user = await this.database.user.update({
      where: {
        id: userId,
      },
      data: {
        ...dto,
      },
    });
    delete user.hash;
    return user;
  }
}
