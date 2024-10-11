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
