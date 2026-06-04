// User Model
// This model represents a customer in our shopping cart system
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// TODO: Define the User model using sequelize.define()
// The model should have the following fields:
//
// - name: STRING(50), required, must be between 2 and 50 characters
//     Hint: use allowNull: false and validate: { len: { args: [2, 50], msg: '...' } }
//
// - email: STRING, required, must be unique and a valid email
//     Hint: use allowNull: false, unique: true, validate: { isEmail: { msg: '...' } }
//     Bonus: add a setter to convert email to lowercase using set(value) { this.setDataValue('email', value.toLowerCase()); }
//
// - address: STRING(200), optional, default to empty string
//     Hint: use defaultValue: ''
//
// Options object (second argument to define):
//   tableName: 'users'

const User = sequelize.define('User', {
  // TODO: Add the "name" field here
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      len: {
        args: [2, 50],
        msg: 'Name must be between 2 and 50 characters'
      }
    }
  },

  // TODO: Add the "email" field here
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: 'Must be a valid email address'
      }
    },
    set(value) {
      this.setDataValue('email', value.toLowerCase());
    }
  },

  // TODO: Add the "address" field here
  address: {
    type: DataTypes.STRING(200),
    defaultValue: ''
  }

}, {
  tableName: 'users'
});

module.exports = User;