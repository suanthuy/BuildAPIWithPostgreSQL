const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

function connect() {
    pool.connect((err, client, release) => {
        if (err) {
            return console.error("Error acquiring client", err.stack);
        }
        client.query("SELECT NOW()", (err, result) => {
            release();
            if (err) {
                return console.error("Error executing query", err.stack);
            }
            console.log(result.rows);
        });
    });
}

module.exports = { connect };
