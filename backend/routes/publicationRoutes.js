const express = require('express');
const {
  getAllPublications,
  addPublication,
  updatePublication,
  deletePublication,
  getSinglePublications
} = require('../controllers/publicationController');
const adminAuth = require('../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.get('/', adminAuth, getAllPublications);          // Get all publications
router.post('/', adminAuth, addPublication);              // Add a new publication
router.get('/:id',adminAuth,  getSinglePublications);          // Get single publications by ID
router.put('/:id', adminAuth, updatePublication);         // Update a publication by ID
router.delete('/:id',adminAuth,  deletePublication);      // Delete a publication by ID

module.exports = router;
