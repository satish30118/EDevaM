const express = require('express');
const multer = require('multer');
const {
  uploadGalleryImage,
  getGalleryImages,
  getGalleryImage,
  deleteGalleryImage
} = require('../../controllers/home/galleryController');
const adminAuth = require('../../middlewares/authMiddleware');

const router = express.Router();

// Set up multer for handling file uploads
const storage = multer.memoryStorage(); // Store images in memory
const upload = multer({ storage });

// Routes
router.post('/', adminAuth, upload.single('img'), uploadGalleryImage); // Upload a gallery image
router.get('/',adminAuth,  getGalleryImages);      // Get all gallery images
router.get('/:id',adminAuth,  getGalleryImage);    // Get a specific gallery image by ID
router.delete('/:id', adminAuth, deleteGalleryImage); // Delete a specific gallery image by ID

module.exports = router;
