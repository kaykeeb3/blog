# News and User Profiles Management API

This project is an API developed to enable user registration, login, and management of news and user profiles. The solution is built using **Node.js**, **TypeScript**, **JWT** for authentication, **Prisma ORM** for database interaction, and follows **Clean Architecture** principles and good software development practices.

## Features

### Authentication
- **User Registration**: Allows new users to register with name, email, and password.
- **User Login**: Authenticates users and generates a JWT token for access to protected resources.

### News Management
- **Create News**: Authenticated users can create new news with title, description, and category.
- **Edit News**: Authenticated users can edit their own news.
- **Delete News**: Authenticated users can delete their news.
- **List News**: Authenticated users can view all published news.

### User Profile
- **Create and Update Profile**: Users can create and update their profiles, including name, description, and photo URL.
- **View Profile**: Users can view their own profile.

## Technologies Used

- **Node.js**: Development platform for building the API.
- **TypeScript**: A superset of JavaScript that provides static typing and improves code maintenance.
- **Express.js**: Minimal and flexible framework for building APIs.
- **JWT (JSON Web Token)**: For authentication and user authorization.
- **Prisma ORM**: ORM for efficient database interaction.
- **bcryptjs**: Library for secure password hashing.

## Architecture and Project Structure

The application follows Clean Architecture to ensure separation of concerns and facilitate scalability and code maintenance.

### Directory Structure

```
/src
  /config
    - database.ts           # Database configuration
  /controllers
    - AuthController.ts     # Authentication logic
    - HomeController.ts     # Initial routing
    - NewsController.ts     # News management logic
    - ProfileController.ts  # Profile management logic
    - UserController.ts     # User management logic
  /dtos
    - CreateUserDTO.ts      # Data Transfer Object for user registration
    - CreateNewsDTO.ts      # DTO for news creation
    - CreateProfileDTO.ts   # DTO for profile creation
  /interfaces
    - IAuthService.ts       # Interface for authentication service
    - IUserService.ts       # Interface for user service
    - INewsService.ts       # Interface for news service
    - IProfileService.ts    # Interface for profile service
  /middlewares
    - authenticateToken.ts  # Middleware to verify JWT token
    - validateNews.ts       # News data validation middleware
    - validateProfile.ts    # Profile data validation middleware
  /repositories
    - PrismaUserRepository.ts   # User repository using Prisma
    - PrismaNewsRepository.ts   # News repository using Prisma
    - PrismaProfileRepository.ts # Profile repository using Prisma
  /routes
    - index.ts              # API routing
  /services
    - AuthService.ts        # Authentication service
    - UserService.ts        # User management service
    - NewsService.ts        # News management service
    - ProfileService.ts     # Profile management service
  - server.ts               # Server initialization file
  - app.ts                  # Express server setup
```

## Installation and Running

### Backend

1. Clone the repository:

   ```bash
   git clone https://github.com/kaykeeb3/blog.git
   cd your-repository/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables by creating a `.env` file at the root of the project:

   ```env
   DATABASE_URL=""
   JWT_SECRET=""
   PORT=3333
   ```

4. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

5. Start the server:

   ```bash
   npm run dev
   ```

Now, the API will be available to receive requests.

## API Usage Examples

### User Registration

```bash
POST /register
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "secret_password"
}
```

### User Login

```bash
POST /login
{
  "email": "johndoe@example.com",
  "password": "secret_password"
}
```

### Create News

```bash
POST /news
{
  "title": "News Title",
  "description": "News Description",
  "category": "News Category"
}
```

### Update News

```bash
PUT /news/:id
{
  "title": "Updated Title",
  "description": "Updated Description",
  "category": "Updated Category"
}
```

### Delete News

```bash
DELETE /news/:id
```

### Create and Update Profile

```bash
POST /profile
{
  "name": "John Doe",
  "description": "Profile Description",
  "photoUrl": "http://url-to-photo.com/photo.jpg"
}
```

### View Profile

```bash
GET /profile
```

## Contributing

Contributions are welcome! To contribute, follow the steps below:

1. Fork the repository
2. Create a new branch for your feature (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Added a new feature'`)
4. Push your changes to the remote repository (`git push origin feature/new-feature`)
5. Open a Pull Request with a detailed description of your contribution.
