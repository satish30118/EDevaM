const fs = require('fs');
const formidable = require('formidable');
const Gallery = require('../../models/home/Gallery');

// Upload a gallery image
exports.uploadGalleryImage = async (req, res) => {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error parsing the file', error: err });
    }

    const imageFile = files.image; // The uploaded file

    // Read the file
    fs.readFile(imageFile.filepath, async (err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Error reading file', error: err });
      }

      const newGalleryImage = new Gallery({
        imageData: data, // Store the binary data
        contentType: imageFile.mimetype // Store the MIME type
      });

      await newGalleryImage.save();
      res.status(201).json({ message: 'Gallery image uploaded successfully', newGalleryImage });
    });
  });
};

// Retrieve all gallery images
exports.getGalleryImages = async (req, res) => {
  try {
    const galleries = await Gallery.find();
    res.status(200).json(galleries);
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
