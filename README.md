# BuildAPIWithPostgreSQL
RESTful API with Node.js, Express, and PostgreSQL

Use Postman to send the request.

Get all users:
```bash
[GET] locahost:3000/account
```
Get user by Id:
```bash
[GET] localhost:3000/account/:id
```
Create an user:
```bash
[POST] localhost:3000/account/register
```
Update an user:
```bash
[PUT] localhost:3000/account/:id
```
Delete an user:
```bash
[DELETE] localhost:3000/account/:id
```
Database environment variables:
```bash
host: "localhost",
user: "database-user",
database: "api",
password: "123456",
port: 5432,
```

Start server:
```bash
npm start
```
