// Cart Item Routes - Defines all cart item-related endpoints
const express = require("express");
const router = express.Router();
const cartItemController = require("../controllers/cartItemController");

// TODO: Define the following routes (same pattern as userRoutes):
//
// GET    /           -> cartItemController.getAllCartItems
// GET    /:id        -> cartItemController.getCartItemById
// POST   /           -> cartItemController.createCartItem
// PUT    /:id        -> cartItemController.updateCartItem
// DELETE /:id        -> cartItemController.deleteCartItem
//
// Note: The "get cart items by user" route is defined in server.js
// because its path starts with /api/users, not /api/cart-items

// TODO: Add your routes here
router.get("/", cartItemController.getAllCartItems);
router.get("/:id", cartItemController.getCartItemById);
router.post("/", cartItemController.createCartItem);
router.put("/:id", cartItemController.updateCartItem);
router.delete("/:id", cartItemController.deleteCartItem);

module.exports = router;
