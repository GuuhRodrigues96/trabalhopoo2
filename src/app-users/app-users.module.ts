import { Module } from '@nestjs/common';
import { AppUsersController } from './app-users.controller';
import { AppUsersService } from './app-users.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AppUsersController],
  providers: [AppUsersService, PrismaService]
  
})
export class AppUsersModule {}
