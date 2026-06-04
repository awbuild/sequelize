// Shopping Cart API Server
const express = require("express");
const { sequelize } = require("./models");
const cartItemController = require("./controllers/cartItemController");

// TODO: Import the three route files
// Hint: const userRoutes = require('./routes/userRoutes');
// Do the same for productRoutes and cartItemRoutes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartItemRoutes = require("./routes/cartItemRoutes");

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// TODO: Mount routes using app.use()
// Each route group gets a base path:
//   '/api/users'      -> userRoutes
//   '/api/products'   -> productRoutes
//   '/api/cart-items'  -> cartItemRoutes
//
// Example: app.use('/api/users', userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart-items", cartItemRoutes);

// Special route for getting cart items by user ID
// This route lives here because its path starts with /api/users
app.get("/api/users/:userId/cart-items", cartItemController.getCartItemsByUser);

// Only start server if this file is run directly (not imported for testing)
if (require.main === module) {
  sequelize.sync({ alter: true }).then(() => {
    app.listen(PORT, () => {
      console.log(`\nShopping Cart API Server`);
      console.log(`========================`);
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`\nAvailable Endpoints:`);
      console.log(`\nUsers:`);
      console.log(`  GET    /api/users`);
      console.log(`  GET    /api/users/:id`);
      console.log(`  POST   /api/users`);
      console.log(`  PUT    /api/users/:id`);
      console.log(`  DELETE /api/users/:id`);
      console.log(`\nProducts:`);
      console.log(`  GET    /api/products`);
      console.log(`  GET    /api/products/:id`);
      console.log(`  POST   /api/products`);
      console.log(`  PUT    /api/products/:id`);
      console.log(`  DELETE /api/products/:id`);
      console.log(`\nCart Items:`);
      console.log(`  GET    /api/cart-items`);
      console.log(`  GET    /api/users/:userId/cart-items`);
      console.log(`  GET    /api/cart-items/:id`);
      console.log(`  POST   /api/cart-items`);
      console.log(`  PUT    /api/cart-items/:id`);
      console.log(`  DELETE /api/cart-items/:id`);
      console.log(`\n========================\n`);
    });
  });
}

// Export app for testing
module.exports = app;
