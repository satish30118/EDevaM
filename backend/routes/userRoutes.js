// routes/userRoutes.js
const express = require('express');
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  loginUser
} = require('../controllers/userController');

const router = express.Router();

// User routes
router.post('/register', createUser);       // Create a new user
router.post('/login', loginUser);       // Create a new user
router.get('/', getUsers);           // Get all users
router.get('/:id', getUserById);     // Get user by ID
router.put('/:id', updateUser);      // Update user
router.delete('/:id', deleteUser);   // Delete user

module.exports = router;
