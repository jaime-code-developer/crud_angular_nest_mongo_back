# NestJS CRUD Backend with JWT Authentication

This is a backend RESTful API project built using **NestJS 11.0** and **MongoDB 8.0**. It features a full **CRUD system for users** and includes **JWT-based authentication**.

📂 **Live frontend project (Portfolio):**  
👉 [https://jaime-code-developer.github.io/portafolio/](https://jaime-code-developer.github.io/portafolio/)

## 🚀 Features

- User authentication using **JWT**
- Secure password hashing with **bcrypt**
- **MongoDB** integration for persistent data storage
- RESTful **CRUD** endpoints for users
- Organized modular structure using NestJS

---

## 📦 Technologies Used

- **NestJS** 11.0
- **MongoDB** 8.0
- **JWT (jsonwebtoken)**
- **Bcrypt**
- **Mongoose**

---

## 🔐 Authentication

### `POST /auth/login`

Authenticate a user and receive a JWT token.

**Request body:**
```json
{
  "email": "admin@admin.com",
  "password": "12345678"
}
```

**Response:**
```json
{
  "access_token": "<JWT_TOKEN>"
}
```

---

## 👤 User Endpoints

### `GET /users`

Returns a list of all users.

**Example response:**
```json
[
  {
    "_id": "686f13395f4ce730b8c3d533",
    "email": "admin@admin.com",
    "password": "<hashed_password>",
    "name": "admin",
    "createdAt": "2025-07-10T01:11:21.565Z",
    "__v": 0
  }
]
```

---

### `PUT /users/:id`

Update an existing user's information.

**Request body:**
```json
{
  "name": "testModificado",
  "email": "test@Modificado",
  "password": "87654321"
}
```

---

### `DELETE /users/:id`

Deletes a user by ID.

**Example response:**
```json
{
  "_id": "6870507a5b7b3383e43b5a84",
  "email": "test@Modificado",
  "password": "<hashed_password>",
  "name": "testModificado",
  "createdAt": "2025-07-10T23:44:58.584Z",
  "__v": 0
}
```

---

## 📁 Project Structure

```
src/
├── auth/             # JWT Auth logic
├── users/            # CRUD logic for users
├── app.module.ts     # Root module
├── main.ts           # Entry point
```

---

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/nest-crud
   JWT_SECRET=your_secret_key
   ```

4. Start the server:
   ```bash
   npm run start:dev
   ```

---

## 📫 Contact

Created by **Jaime**  
📎 [Frontend Portfolio](https://jaime-code-developer.github.io/portafolio/)

---

## 📝 License

This project is open-source and free to use.