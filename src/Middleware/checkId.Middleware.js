const accountModel = require("../Models/accountModel");

class middleWares {
    checkId = (req, res, next) => {
        let Id = req.params.Id;
        accountModel
            .query('SELECT * FROM public.users WHERE "Id" = $1', [Id])
            .then((data) => {
                next();
            })
            .catch((err) => {
                res.status(500).json("UserId does not exist");
            });
    };
}

module.exports = new middleWares();
