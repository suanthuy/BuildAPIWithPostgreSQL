const accountModel = require("../Models/accountModel");

class middleWares {
    checkId = (req, res, next) => {
        var id = req.user.id;
        accountModel
            .query("SELECT * FROM users WHERE id = $1", [id])
            .then((data) => {
                next();
            })
            .catch((err) => {
                res.status(500).json("UserId does not exist");
            });
    };
}

module.exports = new middleWares();
