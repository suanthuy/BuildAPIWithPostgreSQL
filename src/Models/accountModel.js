const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "database-user",
    database: "api",
    password: "123456",
    port: 5432,
});

module.exports = pool;
