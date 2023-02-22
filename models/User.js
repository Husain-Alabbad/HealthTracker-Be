
const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const roles = require("../helper/rolesConfig");


// User profile Schema
const userSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    minlength: [3, "ID must more than 3"],
    maxlength: [20, "Maximum is 20 characters"],
  },
  firstName: {
      type: String,
      required: true,
      minlength: [3, "Characters must more than 3"],
      maxlength: [20, "Maximum is 20 characters"],
    },

    lastName: {
      type: String,
      required: true,
      minlength: [3, "Characters must more than 3"],
      maxlength: [20, "Maximum is 20 characters"],
    },
    emailAddress: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password is Week"],
    },
    role: {
      type: String,
      required: true,
      enum : roles,
      default: "user"
    }
  },
  {
    timestamps: true,
  }
  )

  userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

// User User Model
const User = mongoose.model("User", userSchema);

// Exporting Medicine model to the controller
module.exports = User;