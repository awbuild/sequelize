// User Routes - Defines all user-related endpoints
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// TODO: Define the following routes using router.get(), router.post(), etc.
// Each route calls the matching function from the userController.
//
// GET    /           -> userController.getAllUsers
// GET    /:id        -> userController.getUserById
// POST   /           -> userController.createUser
// PUT    /:id        -> userController.updateUser
// DELETE /:id        -> userController.deleteUser
//
// Example: router.get('/', userController.getAllUsers);

// TODO: Add your routes here
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
