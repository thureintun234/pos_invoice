# Point Of Sale Invoice System

## Description

This is a point of sale full stack application for invoice system. Postman collections for testing api is in the **\_postman_collections** folder.

### Dependencies

- React
- Redux
- Express
- Mongoose
- Helmat
- dotenv
- cross-env
- nodemon
- validator
- jsonwebtoken

### Configuration

- change .env-sample to .env file in backend directory
- add keys in .env file to test the system

### Installing Guide

```
npm install
```

#### Backend

```
npm run dev
```

#### Frontend

```
npm start
```

### API Endpoints

| HTTP Verbs | Endpoints         | Action                     |
| ---------- | ----------------- | -------------------------- |
| POST       | /api/user/        | To create new user account |
| GET        | /api/users        | Get all user accounts      |
| POST       | /api/users/login  | To login your account      |
| GET        | /api/users/me     | Get logged user info       |
| POST       | /api/invoices     | To create invoice          |
| GET        | /api/invoices     | Get all invoices           |
| GET        | /api/invoices/:id | Get a specific invoices    |
| Delete     | /api/invoices/:id | Delete a specific invoices |

- [Frontend Dashboard](https://www.expresjs.org/) This is a frontend part of the project hosted in Netlify.

- [REST API](https://www.expresjs.org/) This is the api hosted in Heroku.
