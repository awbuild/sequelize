// User Controller - Handles all user-related business logic
const { User } = require("../models");

// Get all users
// TODO: Implement this function
// Steps:
//   1. Use User.findAll() to get all users from the database
//   2. Send the users back as JSON using response.json()
//   3. If something goes wrong, catch the error and send a 500 status with the error message
exports.getAllUsers = async (request, response) => {
  try {
    const allUsers = await User.findAll();
    console.log("getAllUsers - found users:", allUsers.length);
    response.json(allUsers);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Get single user by ID
// TODO: Implement this function
// Steps:
//   1. Use User.findByPk(request.params.id) to find one user by their ID
//   2. If no user is found, send a 404 status with { error: 'User not found' }
//   3. If found, send the user as JSON
exports.getUserById = async (request, response) => {
  try {
    const foundUser = await User.findByPk(request.params.id);
    console.log("getUserById - looking for ID:", request.params.id);
    if (foundUser === null) {
      return response.status(404).json({ error: "User not found" });
    }
    response.json(foundUser);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

// Create new user
// TODO: Implement this function
// Steps:
//   1. Use User.create(request.body) to create a new user with the data from the request
//   2. Send the new user back with a 201 status code
//   3. If validation fails, catch the error and send a 400 status
exports.createUser = async (request, response) => {
  try {
    console.log("createUser - request body:", request.body);
    const newUser = await User.create(request.body);
    console.log("createUser - created user ID:", newUser.id);
    response.status(201).json(newUser);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Update user by ID
// TODO: Implement this function
// Steps:
//   1. Find the user by ID using User.findByPk()
//   2. If not found, send 404
//   3. Use user.update(request.body) to update the user's fields
//   4. Send the updated user as JSON
exports.updateUser = async (request, response) => {
  try {
    const foundUser = await User.findByPk(request.params.id);
    console.log("updateUser - looking for ID:", request.params.id);
    if (foundUser === null) {
      return response.status(404).json({ error: "User not found" });
    }
    await foundUser.update(request.body);
    console.log("updateUser - updated user ID:", foundUser.id);
    response.json(foundUser);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};

// Delete user by ID
// TODO: Implement this function
// Steps:
//   1. Find the user by ID using User.findByPk()
//   2. If not found, send 404
//   3. Use user.destroy() to delete the user
//   4. Send a success message: { message: 'User deleted successfully' }
exports.deleteUser = async (request, response) => {
  try {
    const foundUser = await User.findByPk(request.params.id);
    console.log("deleteUser - looking for ID:", request.params.id);
    if (foundUser === null) {
      return response.status(404).json({ error: "User not found" });
    }
    await foundUser.destroy();
    console.log("deleteUser - deleted user ID:", request.params.id);
    response.json({ message: "User deleted successfully" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};
