const express = require('express');
const {
  addNews,
  updateNews,
  deleteNews,
  getSingleNews
} = require('../../controllers/home/newsController');
const { getAllNews } = require('../../controllers/home/newsController');
const adminAuth = require('../../middlewares/authMiddleware');

const router = express.Router();

// Routes
router.get('/', adminAuth,  getAllNews);          // Get all news articles
router.post('/', adminAuth, addNews);             // Add a new news article
router.get('/:id',adminAuth,  getSingleNews);          // Get single news articles
router.put('/:id', adminAuth, updateNews);        // Update a news article by ID
router.delete('/:id',adminAuth,  deleteNews);     // Delete a news article by ID

module.exports = router;
