// Database Connection Module
// This file is provided for you - no changes needed here!
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME || 'shopping_cart_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: false
  }
);

// Test connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to PostgreSQL successfully!');
  })
  .catch((error) => {
    console.error('PostgreSQL connection error:', error.message);
    console.error('Make sure PostgreSQL is running and the connection settings are correct');
  });

module.exports = sequelize;
