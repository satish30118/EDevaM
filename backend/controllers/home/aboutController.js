const About = require('../../models/home/About'); // Import the About model

// Get About content
const getAbout = async (req, res) => {
  try {
    const about = await About.findOne(); // Assuming only one About document
    if (!about) {
      return res.status(404).json({ message: 'About content not found' });
    }
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// Add new About content
const addAbout = async (req, res) => {
  const { address, labName, aboutContent, email, mobileNo, socialMedia } = req.body;
  const image = req.file ? req.file.buffer : null;
  
  try {
    // Check if About content already exists
    const existingAbout = await About.findOne();
    if (existingAbout) {
      return res.status(400).json({ message: 'About content already exists, use update instead.' });
    }

    // Create new About content
    const newAbout = new About({
      labName,
      address,
      aboutContent,
      image,
      email,
      mobileNo,
      socialMedia,
    });
    const savedAbout = await newAbout.save();
    res.status(201).json(savedAbout); // Respond with created content
  } catch (error) {
    res.status(500).json({ message: 'Error creating About content', error: error.message });
  }
};

// Update existing About content
const updateAbout = async (req, res) => {
  const { labName, aboutContent, email, mobileNo, socialMedia } = req.body;
   // Convert the image file to a buffer
   const image = req.file ? req.file.buffer : await About.findOne().image
  
  try {
    const about = await About.findOne(); // Fetch the existing content
    if (!about) {
      return res.status(404).json({ message: 'About content not found' });
    }

    // Update the fields
    about.labName = labName || about.labName;
    about.address = address || about.address;
    about.aboutContent = aboutContent || about.aboutContent;
    about.image = image
    about.email = email || about.email;
    about.mobileNo = mobileNo || about.mobileNo;
    about.socialMedia = socialMedia || about.socialMedia;

    const updatedAbout = await about.save(); // Save the updated document
    res.status(200).json(updatedAbout);
  } catch (error) {
    res.status(500).json({ message: 'Error updating About content', error: error.message });
  }
};

module.exports = {
  getAbout,
  addAbout,
  updateAbout,
};
