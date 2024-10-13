// controllers/awardController.js
const Awards = require('../models/Awards');

// Get all awards
exports.getAllAwards = async (req, res) => {
  try {
    const awards = await Awards.find().sort({year:-1});
    res.status(200).json(awards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards', error });
  }
};

// Add a new award
exports.addAward = async (req, res) => {
  const { content, year } = req.body;

  const newAward = new Awards({
    content,
    year,
  });

  try {
    const savedAward = await newAward.save();
    res.status(201).json({ message: 'Award added successfully', savedAward });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error adding award', error });
  }
};

// Get a single award
exports.getSingleAward = async (req, res) => {
  try {
    const award = await Awards.findById(req.params.id);
    if (!award) {
      return res.status(404).json({ message: 'Award not found' });
    }
    res.status(200).json(award);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching award', error });
  }
};

// Update an award
exports.updateAward = async (req, res) => {
  const { content, year } = req.body;

  try {
    const updatedAward = await Awards.findByIdAndUpdate(
      req.params.id,
      { content, year },
      { new: true } // Return the updated document
    );

    if (!updatedAward) {
      return res.status(404).json({ message: 'Award not found' });
    }

    res.status(200).json({ message: 'Award updated successfully', updatedAward });
  } catch (error) {
    res.status(500).json({ message: 'Error updating award', error });
  }
};

// Delete an award
exports.deleteAward = async (req, res) => {
  try {
    const deletedAward = await Awards.findByIdAndDelete(req.params.id);

    if (!deletedAward) {
      return res.status(404).json({ message: 'Award not found' });
    }

    res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting award', error });
  }
};
