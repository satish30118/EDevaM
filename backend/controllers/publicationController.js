const Publication = require('../models/Publication');

// Get all publications
exports.getAllPublications = async (req, res) => {
  try {
    const publications = await Publication.find();
    res.status(200).json(publications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching publications', error });
  }
};

// Add a new publication
exports.addPublication = async (req, res) => {
  const { content } = req.body;

  const newPublication = new Publication({
    content,
  });

  try {
    const savedPublication = await newPublication.save();
    res.status(201).json({ message: 'Publication added successfully', savedPublication });
  } catch (error) {
    res.status(500).json({ message: 'Error adding publication', error });
  }
};

// Update a publication
exports.updatePublication = async (req, res) => {
  const { content } = req.body;

  try {
    const updatedPublication = await Publication.findByIdAndUpdate(
      req.params.id,
      { content },
      { new: true } // Return the updated document
    );

    if (!updatedPublication) {
      return res.status(404).json({ message: 'Publication not found' });
    }

    res.status(200).json({ message: 'Publication updated successfully', updatedPublication });
  } catch (error) {
    res.status(500).json({ message: 'Error updating publication', error });
  }
};

// Delete a publication
exports.deletePublication = async (req, res) => {
  try {
    const deletedPublication = await Publication.findByIdAndDelete(req.params.id);

    if (!deletedPublication) {
      return res.status(404).json({ message: 'Publication not found' });
    }

    res.status(200).json({ message: 'Publication deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting publication', error });
  }
};
