const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true
  },
  Nickname: {
    type: String
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
