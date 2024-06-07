# User Authentication Application

This is a Node.js application that provides a basic user authentication system using Express and MongoDB. It includes features such as user signup, login, listing users (admin only), and string search functionality.

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Installation

1. Clone the repository:

```bash
git clone https://github.com/keshavkumar526/user-Auth-App.git
cd user-auth-app

```

2. Install dependencies:

```bash
npm install
```
3. Set up environment variables:
   

    Create a .env file in the root of your project and add the following:

```bash
MONGODB_URI=mongodb://localhost:27017/userAuthApp
JWT_SECRET=your_jwt_secret
PORT=3000
```

4. Start the Node.js server:

```bash
node app.js
```

## API Endpoints

### User Signup

- Endpoint: POST `/api/auth/signup`
- Description: Create a new user account.
- Request Body:
```
{
  "username": "admin",
  "password": "password123",
  "type": "admin" // Optional: default is "user"
}

```

### User Login

- Endpoint: POST `/api/auth/login`
- Description: Login a user and get a JWT token.
- Request Body:
```
{
  "username": "admin",
  "password": "password123"
}
```
#### Response:

```
{
  "token": "your_jwt_token"
}
```

### List Users (Admin Only)

- Endpoint: GET `/api/users/list`
- Description: List all users (accessible only to admin users).
- Headers:
```
   Authorization: Bearer <token>
```

### String Search

- Endpoint: POST `/api/search`
- Description: Check if a given string is an anagram of any string in a predefined array.
- Request Body:
```
{
  "input": "Care"
}

```
#### Response:

```
{
  "result": true
}

```

## Project Structure
 
    ├── app.js                  
    ├── Readme.md                   
    ├── models
        ├── user.js                 
    ├── routes
        ├── users.js
        ├── auth.js
        ├── search.js                 









