// routes/awardRoutes.js
const express = require('express');
const {
  getAllAwards,
  addAward,
  getSingleAward,
  updateAward,
  deleteAward,
} = require('../controllers/awardsController');

const router = express.Router();

// Award routes
router.get('/', getAllAwards);                // Get all awards
router.post('/', addAward);                   // Add a new award
router.get('/:id', getSingleAward);           // Get a single award by ID
router.put('/:id', updateAward);               // Update an award by ID
router.delete('/:id', deleteAward);            // Delete an award by ID

module.exports = router;
