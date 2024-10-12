/**
 * Controlador responsável pelo gerenciamento dos produtos no sistema.
 * 
 * O `ProductsController` lida com as requisições HTTP relacionadas aos produtos, 
 * incluindo a criação, consulta, atualização e remoção de produtos. Ele delega 
 * essas operações para o `ProductsService`.
 * 
 * Métodos:
 * - `create(createProductDto: { ean: string, name: string, idCategory: number })`: Cria um novo produto.
 * - `findAll()`: Retorna todos os produtos cadastrados.
 * - `findOne(id: string)`: Retorna um produto específico com base no ID.
 * - `update(id: string, updateProductDto: { ean?: string, name?: string, idCategory?: number })`: Atualiza os dados de um produto existente.
 * - `remove(id: string)`: Remove um produto com base no ID.
 */

import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: {
        ean: string;
        name: string;
        idCategory: number;
    }): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: {
        ean?: string;
        name?: string;
        idCategory?: number;
    }): Promise<Product>;
    remove(id: string): Promise<Product>;
}
