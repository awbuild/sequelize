// Model Index - Import all models and set up relationships
const sequelize = require("../config/database");
const User = require("./User");
const Product = require("./Product");
const CartItem = require("./CartItem");

// ===== RELATIONSHIPS =====
// Set up the associations between our models here.
// Think about it like this:
//   - A User can have many items in their cart
//   - A Product can appear in many different users' carts
//   - Each CartItem belongs to one User and one Product

// TODO: Set up the User <-> CartItem relationship
// A User has many CartItems (one-to-many)
// Hint: User.hasMany(CartItem, { foreignKey: 'userId', onDelete: 'CASCADE' });
// Hint: CartItem.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(CartItem, { foreignKey: "userId", onDelete: "CASCADE" });
CartItem.belongsTo(User, { foreignKey: "userId" });

// TODO: Set up the Product <-> CartItem relationship
// A Product has many CartItems (one-to-many)
// Hint: Product.hasMany(CartItem, { foreignKey: 'productId', onDelete: 'CASCADE' });
// Hint: CartItem.belongsTo(Product, { foreignKey: 'productId' });
Product.hasMany(CartItem, { foreignKey: "productId", onDelete: "CASCADE" });
CartItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = { sequelize, User, Product, CartItem };
