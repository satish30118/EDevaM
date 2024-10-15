// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name:{type:String,},
  email:{type:String, trim:true},
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Make sure to hash passwords before saving
  role: { type: String, default: 'admin' } // Can be extended for other roles
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
