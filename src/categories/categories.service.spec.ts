/**
 * Testes para o `CategoriesService`.
 * 
 * Este conjunto de testes verifica a definição e a configuração do 
 * `CategoriesService`. Utiliza o framework de testes do NestJS para 
 * criar um módulo de teste e garantir que o serviço está 
 * devidamente instanciado.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
