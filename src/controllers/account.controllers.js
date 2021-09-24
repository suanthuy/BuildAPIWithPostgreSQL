const accountModel = require("../models/account.model");

class AccountController {
    /**
     * [GET] localhost:3000/accounts/
     */
    getUsers = (req, res) => {
        accountModel
            .getUsers(req, res)
            .then((data) => {
                res.status(200).json(data.rows);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json("Server Error");
            });
    };

    /**
     * [GET] localhost:3000/accounts/:id
     */
    getUserById = (req, res) => {
        accountModel
            .getUserById(req, res)
            .then((data) => {
                res.status(200).json(data.rows);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server Error" });
            });
    };

    /**
     * [POST] localhost:3000/accounts/register
     */
    createUser = (req, res) => {
        accountModel
            .createUser(req, res)
            .then((data) => {
                res.status(201).json("Create user successfully!!!");
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server Error" });
            });
    };

    /**
     * [PUT] localhost:3000/accounts/:id
     */
    updateUser = (req, res) => {
        accountModel
            .updateUser(req, res)
            .then((data) => {
                res.status(201).json("Update User successfully!!!");
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server Error" });
            });
    };

    /**
     * [DELETE] localhost:3000/accounts/:id
     */
    deleteUser = (req, res) => {
        accountModel
            .deleteUser(req, res)
            .then((data) => {
                res.json("Delete user successfully!!!");
            })
            .catch((err) => {
                console.error(err);
                res.status(500).json({ message: "Server Error" });
            });
    };
}

module.exports = new AccountController();
