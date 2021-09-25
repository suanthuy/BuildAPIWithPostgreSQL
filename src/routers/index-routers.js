const accountRouter = require("./accounts.routers");

function router(app) {
    app.use("/accounts", accountRouter);
    app.get("/", (req, res, next) => {
        res.json({ message: "Hello World!" });
    });
}

module.exports = router;
