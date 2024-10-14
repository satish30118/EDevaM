// routes/awardRoutes.js
const express = require('express');
const {
  getAllAwards,
  addAward,
  getSingleAward,
  updateAward,
  deleteAward,
} = require('../controllers/awardsController');
const adminAuth = require('../middlewares/authMiddleware');

const router = express.Router();

// Award routes
router.get('/',adminAuth,  getAllAwards);                // Get all awards
router.post('/',adminAuth,  addAward);                   // Add a new award
router.get('/:id',adminAuth,  getSingleAward);           // Get a single award by ID
router.put('/:id',adminAuth,  updateAward);               // Update an award by ID
router.delete('/:id',adminAuth,  deleteAward);            // Delete an award by ID

module.exports = router;
