/**
 * Testes para o `CategoriesController`.
 * 
 * Este conjunto de testes verifica a definição e a configuração do 
 * `CategoriesController`. Utiliza o framework de testes do NestJS para 
 * criar um módulo de teste e garantir que o controlador está 
 * devidamente instanciado.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
