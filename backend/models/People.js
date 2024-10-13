const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: Buffer,
    required: true, // Store the image as binary data
  },
  about: {
    type: String,
    required: true,
  },
  alumni: {
    type: Boolean,
    required: true,
    default: false
  },
  position: {
    type: String,
    enum: ['PostDoc', 'PhD','BTech', 'MTech', 'Intern', 'Other'], // Add more options as needed
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('People', peopleSchema);
