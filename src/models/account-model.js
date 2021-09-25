const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

class AccountModel {
    /**
     * [GET] localhost:3000/accounts/
     */
    getUsers = async (req, res) => {
        const response = await pool.query(
            'SELECT "id", address, first_name, last_name, phone, email FROM public.users RETURNING *'
        );
        return response;
    };

    /**
     * [GET] localhost:3000/accounts/:id
     */
    getUserById = async (req, res) => {
        let { id } = req.params;

        const response = await pool.query(
            'SELECT "id", address, first_name, last_name, phone, email FROM public.users WHERE users."id" = $1  RETURNING *',
            [id]
        );
        return response;
    };

    /**
     * [POST] localhost:3000/accounts/register
     */
    createUser = async (req, res) => {
        let { address, first_name, last_name, phone, email } = req.body;

        const response = await pool.query(
            "INSERT INTO public.users(address, first_name, last_name, phone, email) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [address, first_name, last_name, phone, email]
        );
        return response;
    };

    /**
     * [PUT] localhost:3000/accounts/:id
     */
    updateUser = async (req, res) => {
        let { id } = req.params;
        let { first_name, last_name, email, phone, address } = req.body;

        const response = await pool.query(
            'UPDATE public.users SET first_name = $1, last_name = $2, email = $3, phone = $4, address = $5 WHERE users."id" = $6 RETURNING *',
            [first_name, last_name, email, phone, address, id]
        );
        return response;
    };

    /**
     * [DELETE] localhost:3000/accounts/:id
     */
    deleteUser = async (req, res) => {
        let { id } = req.params;

        const response = await pool.query(
            'DELETE FROM public.users WHERE "id" = $1 RETURNING *',
            [id]
        );
        return response;
    };
}

module.exports = new AccountModel();
