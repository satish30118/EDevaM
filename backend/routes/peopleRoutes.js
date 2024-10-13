const express = require('express');
const multer = require('multer');
const {
  getAllPeople,
  addPerson,
  getSinglePerson,
  updatePerson,
  deletePerson,
  getPeopleByCriteria
} = require('../controllers/peopleController');

const router = express.Router();
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage });

// Routes
router.get('/', getPeopleByCriteria); // Get people by criteria (position, alumni)
router.get('/', getAllPeople);                // Get all people
router.post('/',upload.single('img'), addPerson);                   // Add a new person
router.get('/:id', getSinglePerson);           // Get a person by ID
router.put('/:id',upload.single('img'),  updatePerson);              // Update a person by ID
router.delete('/:id', deletePerson);           // Delete a person by ID

module.exports = router;
