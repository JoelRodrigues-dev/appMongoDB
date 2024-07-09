const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  createadat: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("createUser", userSchema);

module.exports = User;
