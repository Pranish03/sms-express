# SMS Express API

A Node.js Express API for Student Management System with MongoDB integration.

## Project Structure

```
sms-express/
├── src/
│   ├── config/
│   │   └── db.config.js                    # MongoDB connection configuration
│   │
│   ├── controllers/
│   │   └── auth.controller.js              # Authentication logic (login, register, etc.)
│   │
│   ├── middlewares/
│   │   └── verifyToken.js                  # JWT token verification middleware
│   │
│   ├── models/
│   │   └── user.model.js                   # User schema and model definition
│   │
│   ├── routes/
│   │   └── auth.routes.js                  # Authentication API endpoints
│   │
│   ├── utils/
│   │   └── generateTokenAndSetCookie.js    # JWT token generation utility
│   │
│   └── index.js                            # Application entry point and server setup
│
├── .gitignore                              # Git ignore configuration
└── package.json                            # Project dependencies and scripts
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5.2.1
- **Database**: MongoDB (with Mongoose ODM v9.1.4)
- **Authentication**: JWT (jsonwebtoken v9.0.3)
- **Password Hashing**: bcryptjs v3.0.3
- **Environment**: dotenv v17.2.3
- **Package Manager**: pnpm v10.28.1