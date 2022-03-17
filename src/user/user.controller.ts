import { GetUser } from './../auth/decorator';
import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/gaurd';
import { User } from '@prisma/client';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  @Get('me')
  getMe(@GetUser() user: User) {
    console.log({ user });
    return user;
  }

  @Patch()
  editUser(@GetUser('id') userId: number) {
    return userId;
  }
}
