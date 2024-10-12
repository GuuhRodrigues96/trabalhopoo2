/**
 * Controlador para gerenciar os usuários do aplicativo.
 * 
 * O `AppUsersController` é responsável por lidar com as requisições HTTP
 * relacionadas aos usuários, como criação, consulta, atualização e remoção
 * de usuários. Ele delega as operações para o `AppUsersService`.
 * 
 * Métodos:
 * - `create(createAppUserDto: CreateAppUserDto)`: Cria um novo usuário.
 * - `findAll()`: Retorna todos os usuários cadastrados.
 * - `findOne(id: string)`: Retorna um usuário específico com base no ID.
 * - `update(id: string, updateAppUserDto)`: Atualiza os dados de um usuário existente.
 * - `remove(id: string)`: Remove um usuário com base no ID fornecido.
 */

import { AppUsersService } from './app-users.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';
export declare class AppUsersController {
    private readonly appUsersService;
    constructor(appUsersService: AppUsersService);
    create(createAppUserDto: CreateAppUserDto): Promise<AppUser>;
    findAll(): Promise<AppUser[]>;
    findOne(id: string): Promise<AppUser>;
    update(id: string, updateAppUserDto: {
        username?: string;
        email?: string;
        password?: string;
    }): Promise<AppUser>;
    remove(id: string): Promise<AppUser>;
}
