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
