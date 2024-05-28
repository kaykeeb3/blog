## Descrição do Projeto

Este projeto consiste em uma API para cadastro e login de usuários, implementação de funcionalidades de gerenciamento de notícias e perfis de usuários. A API foi desenvolvida utilizando Node.js, TypeScript, JWT para autenticação, Prisma ORM para interação com o banco de dados, seguindo princípios de arquitetura limpa e padrões de design.

## Funcionalidades

### Autenticação

- **Cadastro de Usuário:** Permite o registro de novos usuários.
- **Login de Usuário:** Autenticação de usuários com geração de token JWT.

### Notícias

- **Criação de Notícias:** Usuários autenticados podem criar novas notícias.
- **Edição de Notícias:** Usuários autenticados podem editar suas notícias.
- **Exclusão de Notícias:** Usuários autenticados podem excluir suas notícias.
- **Listagem de Notícias:** Usuários autenticados podem visualizar todas as notícias.

### Perfil de Usuário

- **Criação e Atualização de Perfil:** Usuários podem criar e atualizar seus perfis com nome, descrição e URL da foto.
- **Visualização de Perfil:** Usuários podem visualizar seus perfis.

## Tecnologias Utilizadas

- **Node.js:** Plataforma de desenvolvimento.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **Express:** Framework para construção de APIs com Node.js.
- **JWT:** Biblioteca para autenticação baseada em tokens.
- **Prisma ORM:** Ferramenta para manipulação de banco de dados.
- **bcryptjs:** Biblioteca para hashing de senhas.

## Estrutura do Projeto

### server

```
/src
  /config
    - database.ts
  /controllers
    - AuthController.ts
    - HomeController.ts
    - NewsController.ts
    - ProfileController.ts
    - UserController.ts
  /dtos
    - CreateUserDTO.ts
    - CreateNewsDTO.ts
    - CreateProfileDTO.ts
  /interfaces
    - IAuthService.ts
    - IUserService.ts
    - INewsService.ts
    - IProfileService.ts
  /middlewares
    - authenticateToken.ts
    - validateNews.ts
    - validateProfile.ts
  /repositories
    - PrismaUserRepository.ts
    - PrismaNewsRepository.ts
    - PrismaProfileRepository.ts
  /routes
    - index.ts
  /services
    - AuthService.ts
    - UserService.ts
    - NewsService.ts
    - ProfileService.ts
  - server.ts
  - app.ts
```

## Instalação

### Backend

1. Clone o repositório:

   ```sh
   git clone https://github.com/kaykeeb3/blog.git
   cd seu-repositorio/server
   ```

2. Instale as dependências:

   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto:

   ```env
   DATABASE_URL="sua_string_de_conexão_com_o_banco_de_dados"
   JWT_SECRET="seu_segredo_jwt"
   PORT=3333
   ```

4. Execute as migrações do Prisma:

   ```sh
   npx prisma migrate dev
   ```

5. Inicie o servidor:
   ```sh
   npm run dev
   ```

## Como Testar as Funcionalidades

### Endpoints da API

- **Cadastro de Usuário**

  ```sh
  POST /register
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "password": "sua_senha"
  }
  ```

- **Login de Usuário**

  ```sh
  POST /login
  {
    "email": "johndoe@example.com",
    "password": "sua_senha"
  }
  ```

- **Criação de Notícias**

  ```sh
  POST /news
  {
    "title": "Título da Notícia",
    "description": "Descrição da Notícia",
    "category": "Categoria da Notícia"
  }
  ```

- **Atualização de Notícias**

  ```sh
  PUT /news/:id
  {
    "title": "Título da Notícia Atualizado",
    "description": "Descrição da Notícia Atualizada",
    "category": "Categoria da Notícia Atualizada"
  }
  ```

- **Exclusão de Notícias**

  ```sh
  DELETE /news/:id
  ```

- **Criação e Atualização de Perfil**

  ```sh
  POST /profile
  {
    "name": "John Doe",
    "description": "Descrição do Perfil",
    "photoUrl": "http://url-da-foto.com/foto.jpg"
  }
  ```

- **Visualização de Perfil**
  ```sh
  GET /profile
  ```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -am 'Adicionei uma nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
