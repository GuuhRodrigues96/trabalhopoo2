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
