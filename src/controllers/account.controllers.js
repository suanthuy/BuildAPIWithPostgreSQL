const httpStatus = require("http-status");
const accountModel = require("../models/account.model");

class AccountController {
    /**
     * [GET] localhost:3000/accounts/
     */
    getUsers = (req, res) => {
        accountModel
            .getUsers(req, res)
            .then((data) => {
                res.status(httpStatus.OK).json(data.rows);
            })
            .catch((err) => {
                res.status(httpStatus.BAD_REQUEST).json({
                    message: "Bad request",
                    err,
                });
            });
    };

    /**
     * [GET] localhost:3000/accounts/:id
     */
    getUserById = (req, res) => {
        accountModel
            .getUserById(req, res)
            .then((data) => {
                res.status(httpStatus.OK).json(data.rows);
            })
            .catch((err) => {
                res.status(httpStatus.BAD_REQUEST).json({
                    message: "Bad request",
                    err,
                });
            });
    };

    /**
     * [POST] localhost:3000/accounts/register
     */
    createUser = (req, res) => {
        accountModel
            .createUser(req, res)
            .then((data) => {
                res.status(httpStatus.CREATED).json(
                    "Create user successfully!!!"
                );
            })
            .catch((err) => {
                res.status(httpStatus.BAD_REQUEST).json({
                    message: "Bad request",
                    err,
                });
            });
    };

    /**
     * [PUT] localhost:3000/accounts/:id
     */
    updateUser = (req, res) => {
        accountModel
            .updateUser(req, res)
            .then((data) => {
                res.status(httpStatus.OK).json("Update User successfully!!!");
            })
            .catch((err) => {
                res.status(httpStatus.BAD_REQUEST).json({
                    message: "Bad request",
                    err,
                });
            });
    };

    /**
     * [DELETE] localhost:3000/accounts/:id
     */
    deleteUser = (req, res) => {
        accountModel
            .deleteUser(req, res)
            .then((data) => {
                res.status(httpStatus.OK).json("Delete user successfully!!!");
            })
            .catch((err) => {
                res.status(httpStatus.BAD_REQUEST).json({
                    message: "Bad request",
                    err,
                });
            });
    };
}

module.exports = new AccountController();
