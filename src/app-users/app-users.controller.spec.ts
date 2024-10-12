/**
 * Testes para o `AppUsersController`.
 * 
 * Este conjunto de testes verifica a definição e a configuração do 
 * `AppUsersController`. Utiliza o framework de testes do NestJS para 
 * criar um módulo de teste e garantir que o controlador está 
 * devidamente instanciado.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppUsersController } from './app-users.controller';

describe('AppUsersController', () => {
  let controller: AppUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppUsersController],
    }).compile();

    controller = module.get<AppUsersController>(AppUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
