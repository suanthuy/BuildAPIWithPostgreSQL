require("dotenv").config();

const express = require("express");
const accountModel = require("./models/account-model");
const router = require("./routers/Routers");
const db = require("./Databases/Database");

const app = express();
const port = 3000;

/**
 * Enable body-parser to get req.body.
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * Connect to the database
 */
db.connect();

router(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
