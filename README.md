# Student Management System Express API

A Node.js Express API for **Student Management** System with MongoDB integration.

## Project Structure

```
sms-express/
|-- src/
|   |-- config/
|   |   |-- db.config.js                    # MongoDB connection configuration
|   |
|   |-- controlles/
|   |   |-- auth.controller.js              # Authentication logic
|   |
|   |-- middlewares/
|   |   |-- verifyToken.js                  # JWT verification middleware
|   |
|   |-- models/
|   |   |-- user.model.js                   # User schema and model
|   |
|   |-- routes/
|   |   |-- auth.routes.js                  # Authentication API endpoints
|   |
|   |-- utils/
|   |   |-- generateTokenAndSetCookie.js    # JWT generation and cookie setting
|   |
|   |-- index.js                            # Entry point and server setup
|
|-- .gitignore                              # Git ignore configuration
|-- package.json                            # Project scripts and dependencies
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB (with Mongoose ODM v9.1.4)
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Password Hashing**: bcryptjs v3.0.3
- **Environment**: dotenv v17.2.3
- **Package Manager**: pnpm v10.28.1

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB instance
- pnpm package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Application

**Development mode** (with hot reload):
```bash
pnpm dev
```

**Production mode**:
```bash
pnpm start
```

The server will start on `http://localhost:5000` (or the PORT specified in your .env file).

## API Endpoints

- `GET /` - Health check endpoint (returns "Hello World")
- Authentication routes (to be implemented in `/src/routes/auth.routes.js`)

## Development

This project uses:
- **nodemon** for development auto-restart
- **ES6 modules** (`"type": "module"` in package.json)
- **MVC architecture** for clean code organization

## License

ISC