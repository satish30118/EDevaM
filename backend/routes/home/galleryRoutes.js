const express = require('express');
const {
  uploadGalleryImage,
  getGalleryImages,
  getGalleryImage,
  deleteGalleryImage
} = require('../../controllers/home/galleryController');

const router = express.Router();

// Routes
router.post('/', uploadGalleryImage); // Upload a gallery image
router.get('/', getGalleryImages);      // Get all gallery images
router.get('/:id', getGalleryImage);    // Get a specific gallery image by ID
router.delete('/:id', deleteGalleryImage); // Delete a specific gallery image by ID

module.exports = router;
