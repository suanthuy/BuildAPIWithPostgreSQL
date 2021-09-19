const accountController = require("../Controllers/accountController");
const express = require("express");
const router = express.Router();

router.get("/", accountController.getUsers);

router.get("/:id", accountController.getUserById);

router.post("/register", accountController.createUser);

router.put("/:id", accountController.updateUser);

router.delete("/:id", accountController.deleteUser);

module.exports = router;
