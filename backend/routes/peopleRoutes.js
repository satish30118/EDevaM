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
const adminAuth = require('../middlewares/authMiddleware');

const router = express.Router();
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage });

// Routes
router.get('/',adminAuth,  getPeopleByCriteria); // Get people by criteria (position, alumni)
router.get('/', adminAuth,  getAllPeople);                // Get all people
router.post('/', adminAuth, upload.single('img'), addPerson);                   // Add a new person
router.get('/:id',adminAuth,  getSinglePerson);           // Get a person by ID
router.put('/:id',adminAuth, upload.single('img'),  updatePerson);              // Update a person by ID
router.delete('/:id',adminAuth,  deletePerson);           // Delete a person by ID

module.exports = router;
