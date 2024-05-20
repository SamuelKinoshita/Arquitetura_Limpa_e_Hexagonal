# Projeto de Arquitetura Limpa e Hexagonal

## Instalação do Knex
1. Instale o Knex e o driver do PostgreSQL:
    ```bash
    npm i knex pg
    ```
2. Crie um arquivo chamado `knexfile.js` para configurar a conexão com o banco de dados.

## Comandos para acessar o PostgreSQL
1. Acesse o PostgreSQL:
    ```bash
    psql -U postgres
    ```
2. Insira a senha:
    ```
    senha: postgres
    ```
3. Entre no banco de dados:
    ```sql
    postgres=# \c arquitetura
    ```

## Comandos para criação de migrações
1. Adicione o script para criar migrações no `package.json`:
    ```json
    "scripts": {
        "migrate:make": "knex migrate:make --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts --knexpath ./src/exemplos/adaptadores/db/knex"
    }
    ```
2. Crie uma nova migração:
    ```bash
    npm run migrate:make criar_tabela_usuarios
    ```
3. Outros comandos de migração:
    ```json
    "scripts": {
        "migrate:down": "knex migrate:rollback --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts",
        "migrate:up": "knex migrate:latest --knexfile ./src/exemplos/adaptadores/db/knex/knexfile.ts"
    }
    ```

## Instalação da dependência `uuid`
1. Instale a dependência `uuid`:
    ```bash
    npm i uuid
    ```
2. Instale os tipos para desenvolvimento:
    ```bash
    npm i -D @types/uuid
    ```

## Instalação do Express e Jsonwebtoken
1. Instale o Express e o Jsonwebtoken:
    ```bash
    npm i express jsonwebtoken
    ```
2. Instale os tipos para desenvolvimento:
    ```bash
    npm i -D @types/express @types/jsonwebtoken axios @types/axios
    ```

## Estrutura do Projeto
Este projeto segue os princípios da Arquitetura Limpa e Hexagonal, visando a modularidade e facilidade de manutenção.
