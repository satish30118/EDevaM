const express = require('express');
const {
  getAllPeople,
  addPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
  getPeopleByCriteria
} = require('../controllers/peopleController');

const router = express.Router();

// Routes
router.get('/', getPeopleByCriteria); // Get people by criteria (position, alumni)
router.get('/', getAllPeople);                // Get all people
router.post('/', addPerson);                   // Add a new person
router.get('/:id', getSinglePerson);           // Get a person by ID
router.put('/:id', updatePerson);              // Update a person by ID
router.delete('/:id', deletePerson);           // Delete a person by ID

module.exports = router;
