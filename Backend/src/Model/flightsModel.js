const mongoose = require("mongoose");

const FlightSchema = mongoose.Schema(
  {
    logo: {
      type: String,
    },
    title: {
      type: String,
      require: true,
    },
    time1: {
      type: String,
      require: true,
    },
    time2: {
      type: String,
      require: true,
    },
    stops: {
      type: String,
      default: "non stop",
    },
    price: {
      type: Number,
      default: 7452,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Flight", FlightSchema);
