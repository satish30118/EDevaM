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
const adminAuth = require('../middlewares/authMiddleware');

const router = express.Router();

// User routes
router.post('/register', createUser);       // Create a new user
router.post('/login', loginUser);       // Create a new user
router.get('/', adminAuth, getUsers);           // Get all users
router.get('/:id', adminAuth, getUserById);     // Get user by ID
router.put('/:id',adminAuth, updateUser);      // Update user
router.delete('/:id',adminAuth, deleteUser);   // Delete user

module.exports = router;
