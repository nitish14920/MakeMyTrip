const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: false,
    },
    gender: {
      type: String,
      required: false,
    },
    maritalStatus: {
      type: String,
      required: false,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
    profilePicture: {
      type: String,
      required: false,
    },
    googleId: {
      type: String,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Customers = mongoose.model("customer", customerSchema);

module.exports = Customers;
