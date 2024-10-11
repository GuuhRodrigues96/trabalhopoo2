import { AppUsersService } from './app-users.service';
import { AppUser } from '@prisma/client';
import { CreateAppUserDto } from './dto/create-app-user.dto';
export declare class AppUsersController {
    private readonly appUsersService;
    constructor(appUsersService: AppUsersService);
    create(createAppUserDto: CreateAppUserDto): Promise<AppUser>;
    findAll(): Promise<AppUser[]>;
    findOne(id: string): Promise<AppUser>;
    update(id: string, updateAppUserDto: {
        username?: string;
        email?: string;
        password?: string;
    }): Promise<AppUser>;
    remove(id: string): Promise<AppUser>;
}
