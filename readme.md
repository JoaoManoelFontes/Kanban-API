# Kanban API

## Api para um sistema de kanban simples

### Tecnologias utilizadas

-   Typescript
-   NodeJS
-   Express
-   Prisma
-   Postgres
-   Vitest

### Features da aplicação

-   [x] Rotas CRUD de usuários
-   [x] Rotas CRUD de tasks
-   [x] Arquitetura MVC com princípios de SOLID e Clean Architecture
-   [x] Sistema de autenticação JWT
-   [x] Testes unitários
-   [ ] Testes end-to-end (não finalizado)
-   [x] Sistema de gerenciamento de erros

### Como rodar a aplicação

1. Clone o repositório
   `git clone https://github.com/JoaoManoelFontes/Project-kanban-api`
2. Instale as dependências
   `npm install` ou `yarn install`
3. Crie um arquivo .env na raiz do projeto e o preencha com as variáveis de ambiente que estão no arquivo `.env.example`, substituindo os valores das variáveis de ambiente pelos valores desejados
    - _Caso não tenha um banco de dados postgres, execute o comando `npx run docker:init-db` ou `yarn docker:init-db` para criar um container docker com o banco de dados postgres (é necessário ter o docker instalado)_
4. Rode as migrations
   `npx prisma migrate dev` ou `yarn prisma migrate dev`
5. Rode a aplicação
   `npm run dev` ou `yarn dev`
6. Acesse a aplicação em `http://localhost:{porta_definida_no_arquivo_env}`
