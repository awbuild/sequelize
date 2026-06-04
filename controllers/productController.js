// Product Controller - Handles all product-related business logic
const { Product } = require("../models");

// Get all products
// TODO: Implement this function
// This works exactly like getAllUsers - use Product.findAll()
exports.getAllProducts = async (request, response) => {
  try {
    const allProducts = await Product.findAll();
    console.log("getAllProducts - found products:", allProducts.length);
    response.json(allProducts);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Get single product by ID
// TODO: Implement this function
// This works exactly like getUserById - use Product.findByPk()
// Remember to handle the 404 case!
exports.getProductById = async (request, response) => {
  try {
    const foundProduct = await Product.findByPk(request.params.id);
    console.log("getProductById - looking for ID:", request.params.id);
    if (foundProduct === null) {
      return response.status(404).json({ error: "Product not found" });
    }
    response.json(foundProduct);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Create new product
// TODO: Implement this function
// This works exactly like createUser - use Product.create(request.body)
// Send back the new product with status 201
exports.createProduct = async (request, response) => {
  try {
    console.log("createProduct - request body:", request.body);
    const newProduct = await Product.create(request.body);
    console.log("createProduct - created product ID:", newProduct.id);
    response.status(201).json(newProduct);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Update product by ID
// TODO: Implement this function
// Same pattern as updateUser: find, check exists, update, send back
exports.updateProduct = async (request, response) => {
  try {
    const foundProduct = await Product.findByPk(request.params.id);
    console.log("updateProduct - looking for ID:", request.params.id);
    if (foundProduct === null) {
      return response.status(404).json({ error: "Product not found" });
    }
    await foundProduct.update(request.body);
    console.log("updateProduct - updated product ID:", foundProduct.id);
    response.json(foundProduct);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Delete product by ID
// TODO: Implement this function
// Same pattern as deleteUser: find, check exists, destroy, send message
exports.deleteProduct = async (request, response) => {
  try {
    const foundProduct = await Product.findByPk(request.params.id);
    console.log("deleteProduct - looking for ID:", request.params.id);
    if (foundProduct === null) {
      return response.status(404).json({ error: "Product not found" });
    }
    await foundProduct.destroy();
    console.log("deleteProduct - deleted product ID:", request.params.id);
    response.json({ message: "Product deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
