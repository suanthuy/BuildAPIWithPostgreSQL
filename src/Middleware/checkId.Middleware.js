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
                res.status(500).json("User id does not exist");
            });
    };
}

module.exports = new middleWares();
