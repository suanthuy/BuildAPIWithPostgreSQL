const accountModel = require("../Models/accountModel");

class AccountController {
    /**
     * [GET] localhost:3000/account/
     */
    getUsers = (req, res) => {
        accountModel
            .query(
                'SELECT "Id", address, first_name, last_name, phone, email FROM public.users'
            )
            .then((data) => {
                res.json(data.rows);
            })
            .catch((err) => {
                res.status(500).json("Server Error");
            });
    };

    /**
     * [GET] localhost:3000/account/:id
     */
    getUserById = (req, res) => {
        const Id = req.params["Id"];

        accountModel
            .query(
                'SELECT "Id", address, first_name, last_name, phone, email FROM public.users WHERE users."Id" = $1  ',
                [Id]
            )
            .then((data) => {
                res.json(data.rows);
            })
            .catch((err) => {
                res.status(500).json("Server Error");
            });
    };

    /**
     * [POST] localhost:3000/account/register
     */
    createUser = (req, res) => {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;

        accountModel
            .query(
                "INSERT INTO public.users(address, first_name, last_name, phone, email) VALUES ($1, $2, $3, $4, $5)",
                [address, first_name, last_name, phone, email]
            )
            .then((data) => {
                res.json("Create user successfully!!!");
            })
            .catch((err) => {
                res.status(500).json("Server Error");
            });
    };

    /**
     * [PUT] localhost:3000/account/:id
     */
    updateUser = (req, res) => {
        const Id = req.params.Id;
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const email = req.body.email;
        const phone = req.body.phone;
        const address = req.body.address;

        accountModel
            .query(
                'UPDATE public.users SET first_name = $1, last_name = $2, email = $3, phone = $4, address = $5 WHERE users."Id" = $6',
                [first_name, last_name, email, phone, address, Id]
            )
            .then((data) => {
                res.json("Update User successfully!!!");
            })
            .catch((err) => {
                res.status(500).json("Server Error");
            });
    };

    /**
     * [DELETE] localhost:3000/account/:id
     */
    deleteUser = (req, res) => {
        const Id = req.params.Id;

        accountModel
            .query('DELETE FROM public.users WHERE "Id" = $1', [Id])
            .then((data) => {
                res.json("Delete user successfully!!!");
            })
            .catch((err) => {
                res.status(500).json("Server Error");
            });
    };
}

module.exports = new AccountController();
