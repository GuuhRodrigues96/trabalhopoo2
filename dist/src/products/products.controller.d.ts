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
