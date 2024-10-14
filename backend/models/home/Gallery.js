const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  imageData: {
    type: Buffer,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Gallery', gallerySchema);
