/**
 * Controlador responsável pelo gerenciamento das categorias no sistema.
 * 
 * O `CategoriesController` lida com as requisições HTTP relacionadas às categorias, 
 * incluindo a criação, consulta, atualização e remoção de categorias. Ele delega 
 * essas operações para o `CategoriesService`.
 * 
 * Métodos:
 * - `create(createCategoryDto: { name: string })`: Cria uma nova categoria.
 * - `findAll()`: Retorna todas as categorias cadastradas.
 * - `findOne(id: string)`: Retorna uma categoria específica com base no ID.
 * - `update(id: string, updateCategoryDto: { name: string })`: Atualiza os dados de uma categoria.
 * - `remove(id: string)`: Remove uma categoria com base no ID.
 */

import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: {
        name: string;
    }): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: {
        name: string;
    }): Promise<Category>;
    remove(id: string): Promise<Category>;
}
