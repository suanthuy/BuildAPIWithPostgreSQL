const express = require("express");
const accountModel = require("./Models/accountModel");
const router = require("./Routers/index.Router");
const db = require("./Databases/index");

const app = express();
const port = 3000;

/**
 * Enable body-parser to get req.body.
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Connect to the database
 */
db.connect();

router(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
