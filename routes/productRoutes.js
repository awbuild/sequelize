// Product Routes - Defines all product-related endpoints
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// TODO: Define the following routes (same pattern as userRoutes):
//
// GET    /           -> productController.getAllProducts
// GET    /:id        -> productController.getProductById
// POST   /           -> productController.createProduct
// PUT    /:id        -> productController.updateProduct
// DELETE /:id        -> productController.deleteProduct

// TODO: Add your routes here
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
