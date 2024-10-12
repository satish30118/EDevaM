const express = require('express');
const {
  getAllAwards,
  addAward,
  updateAward,
  deleteAward,
  getSingleYearAwards
} = require('../controllers/awardsController');

const router = express.Router();

// Routes
router.get('/', getAllAwards);               // Get all awards
router.post('/', addAward);                   // Add a new award
router.get('/:year', getSingleYearAwards);    // Get awards for a specific year
router.put('/', updateAward);                  // Update awards for a specific year
router.delete('/:year', deleteAward);         // Delete awards for a specific year

module.exports = router;
