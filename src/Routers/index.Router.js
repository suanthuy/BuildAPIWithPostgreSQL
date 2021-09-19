const accountRouter = require("./account.Router");

function router(app) {
    app.use("/account", accountRouter);
    app.get("/", (req, res, next) => {
        res.json("Hello World!");
    });
}

module.exports = router;
