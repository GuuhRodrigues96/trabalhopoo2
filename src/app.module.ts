/**
 * Módulo principal da aplicação (AppModule).
 * 
 * Este módulo é responsável por agregar todos os módulos da aplicação,
 * incluindo o módulo de categorias, usuários e produtos.
 * Ele também define os controladores e serviços utilizados em toda a aplicação.
 */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { AppUsersModule } from './app-users/app-users.module';
import { ProductsModule } from './products/products.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [CategoriesModule, AppUsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService], 
  exports: [PrismaService], 
})
export class AppModule { }
