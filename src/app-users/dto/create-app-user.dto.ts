/**
 * Data Transfer Object (DTO) para criação de um usuário no aplicativo.
 * 
 * O `CreateAppUserDto` é utilizado para transferir os dados necessários
 * para a criação de um novo usuário. Ele contém as informações que devem
 * ser fornecidas pelo cliente ao enviar uma solicitação para criar um usuário.
 * 
 * Propriedades:
 * - `username`: O nome de usuário desejado para o novo usuário.
 * - `email`: O endereço de e-mail do novo usuário.
 * - `password`: A senha do novo usuário.
 * - `type`: O tipo de usuário (por exemplo, administrador, usuário comum, etc.).
 */

export class CreateAppUserDto {
    username: string;
    email: string;
    password: string;
    type: string; 
  }
  
