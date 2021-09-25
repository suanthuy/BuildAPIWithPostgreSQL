# BuildAPIWithPostgreSQL

RESTful API with Node.js, Express, and PostgreSQL

Use Postman to send the request.

Get all users:

```bash
[GET] localhost:3000/account
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
host: "your-host",
user: "your-user",
database: "your-database",
password: "your-password",
port: your-port,
```

Start server:

```bash
npm start
```
