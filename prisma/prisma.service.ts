/**
 * Serviço responsável pela interação com o banco de dados utilizando o Prisma.
 * 
 * O `PrismaService` estende a classe `PrismaClient`, proporcionando 
 * uma interface para realizar operações de leitura e escrita no banco de dados. 
 * Ele é marcado como `@Injectable()`, permitindo que seja injetado em outros 
 * serviços ou controladores dentro do aplicativo NestJS.
 */

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
