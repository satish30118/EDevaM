const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Publication', publicationSchema);
