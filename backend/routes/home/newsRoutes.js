const express = require('express');
const {
  addNews,
  updateNews,
  deleteNews,
  getSingleNews
} = require('../../controllers/home/newsController');
const { getAllNews } = require('../../controllers/home/newsController');

const router = express.Router();

// Routes
router.get('/', getAllNews);          // Get all news articles
router.post('/', addNews);             // Add a new news article
router.get('/:id', getSingleNews);          // Get single news articles
router.put('/:id', updateNews);        // Update a news article by ID
router.delete('/:id', deleteNews);     // Delete a news article by ID

module.exports = router;
