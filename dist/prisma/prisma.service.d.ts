/**
 * Serviço Prisma que gerencia a conexão e as operações com o banco de dados.
 * 
 * Esta classe estende o PrismaClient, fornecendo funcionalidades de ORM para 
 * interagir com o banco de dados. É utilizada em toda a aplicação para realizar
 * consultas e manipulações de dados.
 */

import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    constructor();
}
