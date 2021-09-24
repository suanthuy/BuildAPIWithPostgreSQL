const accountModel = require("../models/account.model");

class middleWares {
    checkId = (req, res, next) => {
        let id = req.params.id;
        accountModel
            .getUserById(req, res)
            .then((data) => {
                next();
            })
            .catch((err) => {
                console.error(err);
                res.status(404).json("User is not found");
            });
    };
}

module.exports = new middleWares();
