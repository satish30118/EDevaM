const express = require('express');
const { getAbout, addAbout, updateAbout } = require('../../controllers/home/aboutController');
const multer = require('multer');
const adminAuth = require('../../middlewares/authMiddleware');
const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage });

// Route for getting the About content
router.get('/', adminAuth, getAbout);

// Route for adding new About content
router.post('/add',adminAuth, upload.single('img'), addAbout);

// Route for updating existing About content
router.put('/update', adminAuth, upload.single('img'), updateAbout);

module.exports = router;
