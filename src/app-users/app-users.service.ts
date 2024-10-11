// app-users/app-users.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';

@Injectable()
export class AppUsersService {
    constructor(private prisma: PrismaService) { }

    async create(data: CreateAppUserDto): Promise<AppUser> {
        return this.prisma.appUser.create({ data });
    }

    async findAll(): Promise<AppUser[]> {
        return this.prisma.appUser.findMany();
    }

    async findOne(id: number): Promise<AppUser> {
        return this.prisma.appUser.findUnique({ where: { id } });
    }

    async update(id: number, data: { username?: string; email?: string; password?: string }): Promise<AppUser> {
        return this.prisma.appUser.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<AppUser> {
        return this.prisma.appUser.delete({ where: { id } });
    }
}
