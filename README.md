# Todo App Backend

## Introduction
This is the backend server for the Todo App, providing API endpoints for user authentication and todo management. This server connects to MongoDB for data storage and uses JWT for secure authentication.

> **Note:** Visit the [main app (frontend)](https://github.com/ArNAB-0053/todo-frontend) to gain clear knowledge about the complete application.

## Tech Stack
- **Runtime:** Node.js
- **Framework:** Express
- **Database:** MongoDB with Mongoose ORM
- **Authentication:** JWT (JSON Web Tokens)
- **Security:** bcrypt for password hashing
- **Middleware:** cors, dotenv

## Backend Setup

1. **Clone the Repo:**
```bash
git clone https://github.com/ArNAB-0053/todo-backend.git
cd todo-backend
```

2. **Install Dependencies:**
```bash
npm install
```

3. **Configure Environment:**
   * The repo includes an .env.example file showing the required environment variables.
   * Copy it to .env:
   * Edit .env and add your MongoDB URI and JWT secret key:
    ```bash
    MONGO_URI==your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4. **Install Nodemon (Recommended):**
```bash
npm i nodemon
```

5. **Start the Server:**
```bash
nodemon server
```

The server should now be running on http://localhost:5000 (or your configured port).

## API Endpoints

The backend provides the following API endpoints organized by route:

### Authentication Routes (`/api/auth`)
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Todo Routes (`/api/todos`)
- `GET /api/todos/get/:userId` - Get all todos for a specific user
- `POST /api/todos/post` - Create a new todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo

### User Routes (`/api/users`)
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user information

> **Important:** Visit the [frontend repository](https://github.com/ArNAB-0053/todo-frontend) for frontend setup instructions.
