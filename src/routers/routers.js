const accountsRouter = require("./account-router");

function router(app) {
    app.use("/accounts", accountsRouter);
    app.get("/", (req, res, next) => {
        res.json({ message: "Hello World!" });
    });
}

module.exports = router;
