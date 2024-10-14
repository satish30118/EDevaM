const Slider = require('../../models/home/Slider');
const fs = require("fs");

// Upload a slider image
exports.uploadSliderImage = async (req, res) => {
  try {
    const { title, description } = req.body;
  
  // Convert the image file to a buffer
  const imgBuffer = req.file ? req.file.buffer : null;

    const newSliderImage = new Slider({ title, description,imageData:imgBuffer });
    await newSliderImage.save();
    res.status(201).json({ message: 'Slider image uploaded successfully', newSliderImage });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error uploading slider image', error });
  }
};

// Retrieve all slider images
exports.getSliderImages = async (req, res) => {
  try {
    const sliders = await Slider.find();
    const slidersWithImages = sliders.map(img => ({
      ...img._doc,
      imageData: img.imageData && img.imageData.toString('base64'), // Convert buffer to base64 string
    }));
    res.status(200).json(slidersWithImages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching slider images', error });
  }
};

// Retrieve a specific slider image
exports.getSliderImage = async (req, res) => {
  try {
    const slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider image not found' });
    }
    res.set('Content-Type', slider.contentType); // Set the correct MIME type
    res.send(slider.imageData); // Send the binary image data
  } catch (error) {
    res.status(500).json({ message: 'Error fetching slider image', error });
  }
};

// Delete a specific slider image
exports.deleteSliderImage = async (req, res) => {
  try {
    const slider = await Slider.findByIdAndDelete(req.params.id);
    if (!slider) {
      return res.status(404).json({ message: 'Slider image not found' });
    }
    res.status(200).json({ message: 'Slider image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting slider image', error });
  }
};
