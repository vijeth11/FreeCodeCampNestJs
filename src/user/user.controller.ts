import { UserService } from './user.service';
import { EditUserDto } from './dto/edit-user.dto';
import { GetUser } from '../auth/decorator';
import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/gaurd';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log({ user });
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number, @Body() dto: EditUserDto) {
    return this.userService.editUser(userId, dto);
  }
}
