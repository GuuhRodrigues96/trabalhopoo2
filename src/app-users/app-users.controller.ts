import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppUsersService } from './app-users.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';


@Controller('app-users')
export class AppUsersController {
  constructor(private readonly appUsersService: AppUsersService) {}

  @Post()
  create(@Body() createAppUserDto:CreateAppUserDto): Promise<AppUser> {
    return this.appUsersService.create(createAppUserDto);
  }

  @Get()
  findAll(): Promise<AppUser[]> {
    return this.appUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<AppUser> {
    return this.appUsersService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAppUserDto: { username?: string; email?: string; password?: string }): Promise<AppUser> {
    return this.appUsersService.update(Number(id), updateAppUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<AppUser> {
    return this.appUsersService.remove(Number(id));
  }
}
