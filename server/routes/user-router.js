const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

router.post("/register", userController.addData);
router.get("/register", userController.getData);
router.delete("/register/:id", userController.deleteUser);
router.get("/register/:id", userController.getUserById);
router.put("/register/:id", userController.editUser);

module.exports = router;
