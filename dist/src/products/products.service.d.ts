/**
 * Serviço responsável pelas operações relacionadas aos produtos no sistema.
 * 
 * O `ProductsService` utiliza o `PrismaService` para realizar operações de 
 * criação, consulta, atualização e remoção de produtos no banco de dados.
 * 
 * Métodos:
 * - `create(data: { ean: string; name: string; idCategory: number })`: Cria um novo produto.
 * - `findAll()`: Retorna todos os produtos cadastrados.
 * - `findOne(id: number)`: Retorna um produto específico com base no ID.
 * - `update(id: number, data: { ean?: string; name?: string; idCategory?: number })`: Atualiza os dados de um produto existente.
 * - `remove(id: number)`: Remove um produto com base no ID.
 */

import { PrismaService } from '../../prisma/prisma.service';
import { Product } from '@prisma/client';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        ean: string;
        name: string;
        idCategory: number;
    }): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, data: {
        ean?: string;
        name?: string;
        idCategory?: number;
    }): Promise<Product>;
    remove(id: number): Promise<Product>;
}
