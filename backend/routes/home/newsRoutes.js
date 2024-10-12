const express = require('express');
const {
  addNews,
  updateNews,
  deleteNews
} = require('../../controllers/home/newsController');
const { getAllNews } = require('../../controllers/home/newsController');

const router = express.Router();

// Routes
router.get('/', getAllNews);          // Get all news articles
router.post('/', addNews);             // Add a new news article
router.put('/:id', updateNews);        // Update a news article by ID
router.delete('/:id', deleteNews);     // Delete a news article by ID

module.exports = router;
