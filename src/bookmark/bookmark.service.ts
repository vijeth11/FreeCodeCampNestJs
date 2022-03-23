import { DatabaseService } from '../database/database.service';
import { EditBookmarkDto } from './dto/edit-bookmark.dto';
import { CreateBookmarkDto } from './dto/create-bookmark.dto';
import { Injectable, ForbiddenException } from '@nestjs/common';

@Injectable()
export class BookmarkService {
  constructor(private databaseService: DatabaseService) {}

  getBookmarks(userId: number) {
    return this.databaseService.bookmark.findMany({
      where: {
        userId,
      },
    });
  }

  getBookmarkById(userId: number, bookmarkId: number) {
    return this.databaseService.bookmark.findFirst({
      where: {
        userId,
        id: bookmarkId,
      },
    });
  }

  async createBookmark(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.databaseService.bookmark.create({
      data: {
        userId,
        ...dto,
      },
    });
    return bookmark;
  }

  async editBookmarkById(
    userId: number,
    dto: EditBookmarkDto,
    bookmarkId: number,
  ) {
    const bookmark = await this.databaseService.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark || bookmark.userId != userId) {
      throw new ForbiddenException('Access to resourse denied');
    }
    return this.databaseService.bookmark.update({
      where: {
        id: bookmarkId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBookmarkById(userId: number, bookmarkId: number) {
    const bookmark = await this.databaseService.bookmark.findUnique({
      where: {
        id: bookmarkId,
      },
    });

    if (!bookmark || bookmark.userId != userId) {
      throw new ForbiddenException('Access to resourse denied');
    }

    await this.databaseService.bookmark.delete({
      where: {
        id: bookmarkId,
      },
    });
  }
}
