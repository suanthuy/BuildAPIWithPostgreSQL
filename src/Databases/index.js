const { Pool } = require("pg");

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "postgres",
    password: "123456",
    port: 5432,
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
