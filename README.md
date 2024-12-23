# API de Gerenciamento de Notícias e Perfis de Usuários

Este projeto é uma API desenvolvida para permitir o cadastro, login e gerenciamento de notícias e perfis de usuários. A solução foi construída utilizando **Node.js**, **TypeScript**, **JWT** para autenticação, **Prisma ORM** para interação com o banco de dados, e segue princípios de **Clean Architecture** e boas práticas de desenvolvimento de software.

## Funcionalidades

### Autenticação
- **Cadastro de Usuário**: Permite o registro de novos usuários com nome, e-mail e senha.
- **Login de Usuário**: Autentica usuários e gera um token JWT para acesso a recursos protegidos.

### Gestão de Notícias
- **Criação de Notícias**: Usuários autenticados podem criar novas notícias, com título, descrição e categoria.
- **Edição de Notícias**: Usuários autenticados podem editar suas próprias notícias.
- **Exclusão de Notícias**: Usuários autenticados podem excluir suas notícias.
- **Listagem de Notícias**: Usuários autenticados podem visualizar todas as notícias publicadas.

### Perfil de Usuário
- **Criação e Atualização de Perfil**: Usuários podem criar e atualizar seus perfis, incluindo nome, descrição e URL da foto.
- **Visualização de Perfil**: Usuários podem visualizar seu próprio perfil.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construir a API.
- **TypeScript**: Superconjunto do JavaScript que oferece tipagem estática e melhora a manutenção do código.
- **Express.js**: Framework minimalista e flexível para construção de APIs.
- **JWT (JSON Web Token)**: Para autenticação e autorização de usuários.
- **Prisma ORM**: ORM para interagir de forma eficiente com o banco de dados.
- **bcryptjs**: Biblioteca para hashing seguro de senhas.

## Arquitetura e Estrutura do Projeto

A aplicação segue a arquitetura limpa (Clean Architecture) para garantir a separação de responsabilidades e facilitar a escalabilidade e manutenção do código.

### Estrutura de Diretórios

```
/src
  /config
    - database.ts           # Configuração do banco de dados
  /controllers
    - AuthController.ts     # Lógica de autenticação
    - HomeController.ts     # Roteamento inicial
    - NewsController.ts     # Controle de notícias
    - ProfileController.ts  # Controle de perfis
    - UserController.ts     # Controle de usuários
  /dtos
    - CreateUserDTO.ts      # Data Transfer Object para criação de usuário
    - CreateNewsDTO.ts      # DTO para criação de notícias
    - CreateProfileDTO.ts   # DTO para criação de perfil de usuário
  /interfaces
    - IAuthService.ts       # Interface de serviço de autenticação
    - IUserService.ts       # Interface de serviço de usuários
    - INewsService.ts       # Interface de serviço de notícias
    - IProfileService.ts    # Interface de serviço de perfis
  /middlewares
    - authenticateToken.ts  # Middleware para verificar o token JWT
    - validateNews.ts       # Validação de dados de notícias
    - validateProfile.ts    # Validação de dados de perfil
  /repositories
    - PrismaUserRepository.ts   # Repositório de usuários usando Prisma
    - PrismaNewsRepository.ts   # Repositório de notícias usando Prisma
    - PrismaProfileRepository.ts # Repositório de perfis usando Prisma
  /routes
    - index.ts              # Roteamento da API
  /services
    - AuthService.ts        # Serviço de autenticação
    - UserService.ts        # Serviço de gerenciamento de usuários
    - NewsService.ts        # Serviço de gerenciamento de notícias
    - ProfileService.ts     # Serviço de gerenciamento de perfis
  - server.ts               # Arquivo de inicialização do servidor
  - app.ts                  # Configuração e instância do servidor Express
```

## Instalação e Execução

### Backend

1. Clone o repositório:

   ```bash
   git clone https://github.com/kaykeeb3/blog.git
   cd seu-repositorio/server
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente criando o arquivo `.env` na raiz do projeto:

   ```env
   DATABASE_URL=""
   JWT_SECRET=""
   PORT=3333
   ```

4. Execute as migrações do Prisma:

   ```bash
   npx prisma migrate dev
   ```

5. Inicie o servidor:

   ```bash
   npm run dev
   ```

Agora, a API estará disponível para receber requisições.

## Exemplos de Uso da API

### Cadastro de Usuário

```bash
POST /register
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "senha_secreta"
}
```

### Login de Usuário

```bash
POST /login
{
  "email": "johndoe@example.com",
  "password": "senha_secreta"
}
```

### Criação de Notícias

```bash
POST /news
{
  "title": "Título da Notícia",
  "description": "Descrição da Notícia",
  "category": "Categoria da Notícia"
}
```

### Atualização de Notícias

```bash
PUT /news/:id
{
  "title": "Título Atualizado",
  "description": "Descrição Atualizada",
  "category": "Categoria Atualizada"
}
```

### Exclusão de Notícias

```bash
DELETE /news/:id
```

### Criação e Atualização de Perfil

```bash
POST /profile
{
  "name": "John Doe",
  "description": "Descrição do Perfil",
  "photoUrl": "http://url-da-foto.com/foto.jpg"
}
```

### Visualização de Perfil

```bash
GET /profile
```

## Contribuição

Contribuições são bem-vindas! Para colaborar, siga os passos abaixo:

1. Faça um fork do repositório
2. Crie uma nova branch para a sua feature (`git checkout -b feature/nova-feature`)
3. Realize os commits das suas alterações (`git commit -am 'Adicionei uma nova feature'`)
4. Envie suas alterações para o repositório remoto (`git push origin feature/nova-feature`)
5. Abra um Pull Request com a descrição detalhada da sua contribuição.
