/**
 * Serviço responsável pela lógica de negócios relacionada às categorias.
 * 
 * O `CategoriesService` fornece métodos para criar, recuperar, atualizar e 
 * remover categorias no banco de dados. Ele utiliza o `PrismaService` 
 * para interagir com a camada de persistência de dados.
 */

// categories/categories.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
    constructor(private prisma: PrismaService) { }

    async create(data: { name: string }): Promise<Category> {
        return this.prisma.category.create({ data });
    }

    async findAll(): Promise<Category[]> {
        return this.prisma.category.findMany();
    }

    async findOne(id: number): Promise<Category> {
        return this.prisma.category.findUnique({ where: { id } });
    }

    async update(id: number, data: { name: string }): Promise<Category> {
        return this.prisma.category.update({
            where: { id },
            data,
        });
    }

    async remove(id: number): Promise<Category> {
        return this.prisma.category.delete({ where: { id } });
    }
}
