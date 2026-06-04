// Product Model
// This model represents a product available for purchase
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// TODO: Define the Product model using sequelize.define()
// The model should have the following fields:
//
// - name: STRING(100), required, must be between 3 and 100 characters
//     Hint: use allowNull: false and validate: { len: { args: [3, 100], msg: '...' } }
//
// - description: TEXT, required, must be at least 10 characters
//     Hint: use allowNull: false and validate: { len: { args: [10], msg: '...' } }
//
// - price: DECIMAL(10, 2), required, cannot be negative
//     Hint: use allowNull: false and validate: { min: { args: [0], msg: '...' } }
//
// - category: STRING, required, must be one of: Electronics, Clothing, Books, Home, Sports
//     Hint: use validate: { isIn: { args: [['Electronics', 'Clothing', 'Books', 'Home', 'Sports']], msg: '...' } }
//
// - inStock: BOOLEAN, default to true
//     Hint: use defaultValue: true
//
// Options object (second argument to define):
//   tableName: 'products'

const Product = sequelize.define(
  "Product",
  {
    // TODO: Add the "name" field here
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        len: {
          args: [3, 100],
          msg: "Name must be between 3 and 100 characters",
        },
      },
    },

    // TODO: Add the "description" field here
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [10],
          msg: "Description must be at least 10 characters",
        },
      },
    },

    // TODO: Add the "price" field here
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: {
          args: [0],
          msg: "Price cannot be negative",
        },
      },
    },

    // TODO: Add the "category" field here
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [["Electronics", "Clothing", "Books", "Home", "Sports"]],
          msg: "Category must be one of: Electronics, Clothing, Books, Home, Sports",
        },
      },
    },

    // TODO: Add the "inStock" field here
    inStock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    tableName: "products",
  },
);

module.exports = Product;
