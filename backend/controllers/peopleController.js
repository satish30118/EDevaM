const People = require('../models/People');

// Add a new person
exports.addPerson = async (req, res) => {
  const { name, about, alumni, position, socialMediaLinks } = req.body;
  
  // Convert the image file to a buffer
  const imgBuffer = req.file ? req.file.buffer : null;

  const newPerson = new People({
    name,
    img: imgBuffer, // Store the image buffer
    about,
    alumni,
    position,
    socialMediaLinks,
  });

  try {
    const savedPerson = await newPerson.save();
    res.status(201).json({ message: 'Person added successfully', savedPerson });
  } catch (error) {
    res.status(500).json({ message: 'Error adding person', error });
  }
};

// Update a person by ID
exports.updatePerson = async (req, res) => {
  const { name, about,position,alumni, socialMediaLinks } = req.body;
   // Convert the image file to a buffer
   const imgBuffer = req.file ? req.file.buffer : await People.findById( req.params.id).img
  //  console.log(req.file)

  try {
    const updatedPerson = await People.findByIdAndUpdate(
      req.params.id,
      { name, img:imgBuffer, about, position, socialMediaLinks, alumni},
      { new: true } // Return the updated document
    );

    if (!updatedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json({ message: 'Person updated successfully', updatedPerson });
  } catch (error) {
    res.status(500).json({ message: 'Error updating person', error });
  }
};


// Get all people
exports.getAllPeople = async (req, res) => {
  try {
    const people = await People.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching people', error });
  }
};

// Get a single person by ID
exports.getSinglePerson = async (req, res) => {
  try {
    const person = await People.findById(req.params.id);

    if (!person) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching person', error });
  }
};


// Delete a person by ID
exports.deletePerson = async (req, res) => {
  try {
    const deletedPerson = await People.findByIdAndDelete(req.params.id);

    if (!deletedPerson) {
      return res.status(404).json({ message: 'Person not found' });
    }

    res.status(200).json({ message: 'Person deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting person', error });
  }
};


// Get people by position and alumni status
exports.getPeopleByCriteria = async (req, res) => {
    const { position, alumni } = req.query;
  
    try {
      // Build the filter object
      const filter = {};
      if (position) {
        filter.position = position;
      }
      if (alumni !== undefined) {
        filter.alumni = alumni; // Convert string to boolean
      }
  
      const people = await People.find(filter);
      const membersWithImages = people.map(member => ({
        ...member._doc,
        img: member.img && member.img.toString('base64'), // Convert buffer to base64 string
      }));
      res.status(200).json(membersWithImages);
    } catch (error) {
      console.log(error)
      res.status(500).json({ message: 'Error fetching people', error });
    }
  };
  