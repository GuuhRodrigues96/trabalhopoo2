/**
 * Módulo que encapsula a lógica relacionada aos usuários do aplicativo.
 * 
 * O `AppUsersModule` é responsável por agrupar o controlador e o serviço
 * que gerenciam as operações de usuários. Ele registra o `AppUsersController`
 * para lidar com as requisições HTTP e o `AppUsersService` para implementar 
 * a lógica de negócios relacionada a esses usuários. O `PrismaService` é
 * também fornecido como uma dependência, permitindo acesso ao banco de dados.
 */

import { Module } from '@nestjs/common';
import { AppUsersController } from './app-users.controller';
import { AppUsersService } from './app-users.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AppUsersController],
  providers: [AppUsersService, PrismaService]
  
})
export class AppUsersModule {}
