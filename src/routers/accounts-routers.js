const accountController = require("../controllers/account-controllers");
const express = require("express");
const middleWares = require("../middleware/authentication-middleware");
const router = express.Router();

router.get("/:id", middleWares.checkId, accountController.getUserById);

router.post("/register", middleWares.createUser);

router.put("/:id", middleWares.checkId, accountController.updateUser);

router.delete("/:id", middleWares.checkId, accountController.deleteUser);

router.get("/", accountController.getUsers);

module.exports = router;
