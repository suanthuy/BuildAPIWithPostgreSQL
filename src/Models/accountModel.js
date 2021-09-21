const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "123456",
    port: 5432,
});

module.exports = pool;
