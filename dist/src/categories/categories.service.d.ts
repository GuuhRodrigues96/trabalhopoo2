/**
 * Serviço responsável pelas operações relacionadas às categorias no sistema.
 * 
 * O `CategoriesService` utiliza o `PrismaService` para realizar operações de 
 * criação, consulta, atualização e remoção de categorias no banco de dados.
 * 
 * Métodos:
 * - `create(data: { name: string })`: Cria uma nova categoria.
 * - `findAll()`: Retorna todas as categorias cadastradas.
 * - `findOne(id: number)`: Retorna uma categoria específica com base no ID.
 * - `update(id: number, data: { name: string })`: Atualiza os dados de uma categoria existente.
 * - `remove(id: number)`: Remove uma categoria com base no ID.
 */

import { PrismaService } from '../../prisma/prisma.service';
import { Category } from '@prisma/client';
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        name: string;
    }): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, data: {
        name: string;
    }): Promise<Category>;
    remove(id: number): Promise<Category>;
}
