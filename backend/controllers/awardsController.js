const Awards = require('../models/Awards');

// Get all awards, grouped by year
exports.getAllAwards = async (req, res) => {
  try {
    const awards = await Awards.find();
    const groupedAwards = awards.reduce((acc, award) => {
      const year = award.year;
      if (!acc[year]) {
        acc[year] = { year, content: [] };
      }
      acc[year].content.push(...award.content);
      return acc;
    }, {});

    res.status(200).json(Object.values(groupedAwards));
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards', error });
  }
};

// Add a new award entry for a specific year
exports.addAward = async (req, res) => {
  const { year, content } = req.body;

  try {
    // Check if the year already exists
    let awardEntry = await Awards.findOne({ year });

    if (awardEntry) {
      // If it exists, push the new content into the existing content array
      awardEntry.content.push(content);
      await awardEntry.save();
      return res.status(200).json({ message: 'Award updated successfully', awardEntry });
    } else {
      // If it doesn't exist, create a new entry
      const newAward = new Awards({
        year,
        content: [content],
      });
      const savedAward = await newAward.save();
      return res.status(201).json({ message: 'Award added successfully', savedAward });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error adding award', error });
  }
};

// Get a single year of awards
exports.getSingleYearAwards = async (req, res) => {
  try {
    const year = req.params.year;
    const awardEntry = await Awards.findOne({ year });

    if (!awardEntry) {
      return res.status(404).json({ message: 'Awards not found for this year' });
    }

    res.status(200).json(awardEntry);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching awards for this year', error });
  }
};

// Update an award entry for a specific year
exports.updateAward = async (req, res) => {
  const { year, content } = req.body;

  try {
    const updatedAward = await Awards.findOneAndUpdate(
      { year },
      { $set: { content } },
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

// Delete an award entry for a specific year
exports.deleteAward = async (req, res) => {
  try {
    const deletedAward = await Awards.findOneAndDelete({ year: req.params.year });

    if (!deletedAward) {
      return res.status(404).json({ message: 'Award not found' });
    }

    res.status(200).json({ message: 'Award deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting award', error });
  }
};
