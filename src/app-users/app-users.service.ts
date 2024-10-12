/**
 * Serviço responsável pela lógica de negócios relacionada aos usuários do aplicativo.
 * 
 * O `AppUsersService` fornece métodos para criar, buscar, atualizar e remover 
 * usuários no banco de dados. Ele utiliza o `PrismaService` para realizar operações 
 * de CRUD (Create, Read, Update, Delete) no modelo `AppUser`.
 */

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
