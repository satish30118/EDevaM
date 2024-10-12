const express = require('express');
const {
  getAllPublications,
  addPublication,
  updatePublication,
  deletePublication
} = require('../controllers/publicationController');

const router = express.Router();

// Routes
router.get('/', getAllPublications);          // Get all publications
router.post('/', addPublication);              // Add a new publication
router.put('/:id', updatePublication);         // Update a publication by ID
router.delete('/:id', deletePublication);      // Delete a publication by ID

module.exports = router;
