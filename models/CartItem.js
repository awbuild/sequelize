// CartItem Model
// This model represents an item in a user's shopping cart
// It connects a User to a Product with a quantity
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// TODO: Define the CartItem model using sequelize.define()
// The model should have the following field:
//
// - quantity: INTEGER, required, must be between 1 and 99
//     Hint: use allowNull: false and validate with min and max
//
// Note: The userId and productId foreign keys will be added automatically
// when we set up relationships in models/index.js
//
// Options object (second argument to define):
//   tableName: 'cart_items'

const CartItem = sequelize.define(
  "CartItem",
  {
    // TODO: Add the "quantity" field here
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: {
          args: [1],
          msg: "Quantity must be at least 1",
        },
        max: {
          args: [99],
          msg: "Quantity cannot exceed 99",
        },
      },
    },
  },
  {
    tableName: "cart_items",
  },
);

module.exports = CartItem;