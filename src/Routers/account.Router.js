const accountController = require("../Controllers/accountController");
const express = require("express");
const middleWares = require("../Middleware/checkId.Middleware");
const router = express.Router();

router.get("/:Id", middleWares.checkId, accountController.getUserById);

router.post("/register", accountController.createUser);

router.put("/:Id", middleWares.checkId, accountController.updateUser);

router.delete("/:Id", middleWares.checkId, accountController.deleteUser);

router.get("/", accountController.getUsers);

module.exports = router;
