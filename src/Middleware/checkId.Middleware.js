const accountModel = require("../models/account.model");

class middleWares {
    checkId = (req, res, next) => {
        let id = req.params.id;
        accountModel
            .query('SELECT * FROM public.users WHERE "id" = $1', [id])
            .then((data) => {
                next();
            })
            .catch((err) => {
                res.status(500).json("UserId does not exist");
            });
    };
}

module.exports = new middleWares();
