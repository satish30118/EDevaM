const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  title: { type: String, required: false },
  description: { type: String },
  imageData: { type: Buffer, required: true }, // Store the image as binary data
}, { timestamps: true });

module.exports = mongoose.model('Slider', sliderSchema);
