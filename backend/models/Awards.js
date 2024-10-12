const mongoose = require('mongoose');

const awardsSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  content: [
    {
      type: String,
      required: true,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Awards', awardsSchema);
