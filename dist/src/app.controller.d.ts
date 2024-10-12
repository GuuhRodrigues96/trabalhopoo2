/**
 * Controlador principal do aplicativo responsável por gerenciar as requisições
 * relacionadas à aplicação.
 * 
 * O `AppController` lida com as requisições HTTP e delega as operações
 * ao `AppService`, que contém a lógica de negócios. Este controlador pode
 * incluir métodos que respondem a rotas específicas do aplicativo.
 * 
 * Métodos:
 * - `getHello()`: Retorna uma mensagem de saudação.
 */

import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
}
