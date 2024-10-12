const News = require('../../models/home/News');

// Get all news articles
exports.getAllNews = async (req, res) => {
  try {
    const newsArticles = await News.find();
    res.status(200).json(newsArticles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news articles', error });
  }
};

// Add a new news article
exports.addNews = async (req, res) => {
  const { title, content } = req.body;

  const newArticle = new News({
    title,
    content,
  });

  try {
    const savedArticle = await newArticle.save();
    res.status(201).json({ message: 'News article added successfully', savedArticle });
  } catch (error) {
    res.status(500).json({ message: 'Error adding news article', error });
  }
};

// Update a news article
exports.updateNews = async (req, res) => {
  const { title, content } = req.body;

  try {
    const updatedArticle = await News.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // Return the updated document
    );

    if (!updatedArticle) {
      return res.status(404).json({ message: 'News article not found' });
    }

    res.status(200).json({ message: 'News article updated successfully', updatedArticle });
  } catch (error) {
    res.status(500).json({ message: 'Error updating news article', error });
  }
};

// Delete a news article
exports.deleteNews = async (req, res) => {
  try {
    const deletedArticle = await News.findByIdAndDelete(req.params.id);

    if (!deletedArticle) {
      return res.status(404).json({ message: 'News article not found' });
    }

    res.status(200).json({ message: 'News article deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting news article', error });
  }
};
