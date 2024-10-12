/**
 * Serviço responsável pelas operações relacionadas aos usuários do aplicativo.
 * 
 * O `AppUsersService` utiliza o `PrismaService` para realizar operações de 
 * criação, consulta, atualização e remoção de usuários no banco de dados.
 * 
 * Métodos:
 * - `create(data: CreateAppUserDto)`: Cria um novo usuário.
 * - `findAll()`: Retorna todos os usuários cadastrados.
 * - `findOne(id: number)`: Retorna um usuário específico com base no ID.
 * - `update(id: number, data)`: Atualiza os dados de um usuário existente.
 * - `remove(id: number)`: Remove um usuário com base no ID.
 */

import { PrismaService } from '../../prisma/prisma.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';
export declare class AppUsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAppUserDto): Promise<AppUser>;
    findAll(): Promise<AppUser[]>;
    findOne(id: number): Promise<AppUser>;
    update(id: number, data: {
        username?: string;
        email?: string;
        password?: string;
    }): Promise<AppUser>;
    remove(id: number): Promise<AppUser>;
}
