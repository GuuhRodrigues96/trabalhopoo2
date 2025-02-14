/**
 * Controlador responsável pelas operações relacionadas aos usuários do aplicativo.
 * 
 * O `AppUsersController` fornece endpoints para criar, buscar, atualizar e remover
 * usuários. Ele utiliza o `AppUsersService` para realizar a lógica de negócios
 * associada a essas operações.
 * 
 * Rotas:
 * - `POST /app-users`: Cria um novo usuário.
 * - `GET /app-users`: Retorna todos os usuários.
 * - `GET /app-users/:id`: Retorna um usuário específico pelo ID.
 * - `PUT /app-users/:id`: Atualiza um usuário específico pelo ID.
 * - `DELETE /app-users/:id`: Remove um usuário específico pelo ID.
 */

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
