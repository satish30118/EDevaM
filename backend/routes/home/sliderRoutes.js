const express = require('express');
const multer = require('multer');
const { uploadSliderImage, getSliderImages, getSliderImage, deleteSliderImage } = require('../../controllers/home/sliderController');

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), uploadSliderImage); // Upload a slider image
router.get('/', getSliderImages);                             // Get all slider images
router.get('/:id', getSliderImage);                           // Get a specific slider image by ID
router.delete('/:id', deleteSliderImage);                     // Delete a specific slider image by ID

module.exports = router;
