const accountController = require("../Controllers/accountController");
const express = require("express");
const middleWares = require("../Middleware/checkId.Middleware");
const router = express.Router();

router.get("/", accountController.getUsers);

router.get("/:id", middleWares.checkId, accountController.getUserById);

router.post("/register", accountController.createUser);

router.put("/:id", middleWares.checkId, accountController.updateUser);

router.delete("/:id", middleWares.checkId, accountController.deleteUser);

module.exports = router;
