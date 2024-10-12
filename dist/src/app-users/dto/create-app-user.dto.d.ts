/**
 * Data Transfer Object (DTO) para a criação de um usuário.
 * 
 * Esta classe contém os campos necessários para a criação de um usuário
 * no sistema, incluindo nome de usuário, e-mail, senha e tipo de usuário.
 * 
 * Campos:
 * - `username`: Nome de usuário único.
 * - `email`: E-mail válido associado ao usuário.
 * - `password`: Senha do usuário, que deve ser armazenada de forma segura.
 * - `type`: Define o tipo de usuário (por exemplo: 'admin', 'user').
 */

export declare class CreateAppUserDto {
    username: string;
    email: string;
    password: string;
    type: string;
}
