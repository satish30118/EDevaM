const mongoose = require('mongoose');

// Define the schema for About
const AboutSchema = new mongoose.Schema({
  labName: {
    type: String,
    required: true,
    default:"Edevam"
  },
  aboutContent: {
    type: String,
    required: true,
    default:'Lab'
  },
  image: {
    type: Buffer, // Store image URL or file path
    required: false,
  },
  email: {
    type: String,
    required: true,
    default:"ashwini@ch.iitr.ac.in"

  },
  mobileNo: {
    type: String,
    required: true,
    default:"1332-284926"
  },
  address:{
    type:String,
    required:true,
    default:"Lab No. 306, Chemical Engineering Dept. IIT Roorkee, Roorkee,247667"
  },
  socialMedia: {
    instagram: { type: String },
    twitter: { type: String },
    facebook: { type: String },     
    linkedin: { type: String },
  },
});

module.exports = mongoose.model('About', AboutSchema);
