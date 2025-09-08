const mongoose = require("mongoose");

const signInSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensures no duplicate emails
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  googleId: {
    type: String, // for Google OAuth users
    default: null,
  },
});

const signInModel = mongoose.model("UserDetails", signInSchema);

module.exports = signInModel;
