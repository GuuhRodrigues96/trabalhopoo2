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
