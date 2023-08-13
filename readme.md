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
-   [x] Testes end-to-end
-   [x] Sistema de gerenciamento de erros

### Como rodar a aplicação

1. Clone o repositório
   `git clone https://github.com/JoaoManoelFontes/Project-kanban-api`
2. Instale as dependências
   `npm install` ou `yarn install`
3. Crie um arquivo .env na raiz do projeto e preencha com as variáveis de ambiente que estão no arquivo `.env.example`
4. Rode as migrations
   `npx prisma migrate dev` ou `yarn prisma migrate dev`
5. Rode a aplicação
   `npm run dev` ou `yarn dev`
6. Acesse a aplicação em `http://localhost:3000`
