const fs = require('fs');
const formidable = require('formidable');
const Gallery = require('../../models/home/Gallery');

// Upload a gallery image
exports.uploadGalleryImage = async (req, res) => {
  try {
 
  // Convert the image file to a buffer
  const imgBuffer = req.file ? req.file.buffer : null;

    const newGalleryImage = new Gallery({imageData:imgBuffer });
    await newGalleryImage.save();
    res.status(201).json({ message: 'Gallery image uploaded successfully', newGalleryImage });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error uploading slider image', error });
  }
};

// Retrieve all gallery images
exports.getGalleryImages = async (req, res) => {
  try {
    const galleries = await Gallery.find();

    const galleriesWithImages = galleries.map(img => ({
      ...img._doc,
      imageData: img.imageData && img.imageData.toString('base64'), // Convert buffer to base64 string
    }));
    res.status(200).json(galleriesWithImages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery images', error });
  }
};

// Retrieve a specific gallery image
exports.getGalleryImage = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    res.set('Content-Type', gallery.contentType); // Set the correct MIME type
    res.send(gallery.imageData); // Send the binary image data
  } catch (error) {
    res.status(500).json({ message: 'Error fetching gallery image', error });
  }
};

// Delete a specific gallery image
exports.deleteGalleryImage = async (req, res) => {
  try {
    const gallery = await Gallery.findByIdAndDelete(req.params.id);
    if (!gallery) {
      return res.status(404).json({ message: 'Gallery image not found' });
    }
    res.status(200).json({ message: 'Gallery image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting gallery image', error });
  }
};
