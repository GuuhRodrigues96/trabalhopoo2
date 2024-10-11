import { PrismaService } from '../../prisma/prisma.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';
export declare class AppUsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateAppUserDto): Promise<AppUser>;
    findAll(): Promise<AppUser[]>;
    findOne(id: number): Promise<AppUser>;
    update(id: number, data: {
        username?: string;
        email?: string;
        password?: string;
    }): Promise<AppUser>;
    remove(id: number): Promise<AppUser>;
}
