const express = require('express');
const multer = require('multer');
const { uploadSliderImage, getSliderImages, getSliderImage, deleteSliderImage } = require('../../controllers/home/sliderController');
const adminAuth = require('../../middlewares/authMiddleware');

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage });

// Routes
router.post('/',adminAuth,  upload.single('img'), uploadSliderImage); // Upload a slider image
router.get('/',adminAuth,  getSliderImages);                             // Get all slider images
router.get('/:id',adminAuth,  getSliderImage);                           // Get a specific slider image by ID
router.delete('/:id',adminAuth,  deleteSliderImage);                     // Delete a specific slider image by ID

module.exports = router;
