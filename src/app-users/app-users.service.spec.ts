/**
 * Testes para o `AppUsersService`.
 * 
 * Este conjunto de testes verifica a definição e a configuração do 
 * `AppUsersService`. Utiliza o framework de testes do NestJS para 
 * criar um módulo de teste e garantir que o serviço está 
 * devidamente instanciado.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppUsersService } from './app-users.service';

describe('AppUsersService', () => {
  let service: AppUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppUsersService],
    }).compile();

    service = module.get<AppUsersService>(AppUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
