const mongoose = require("mongoose");

const AirportSchema = mongoose.Schema(
  {
    Airport: {
      type: String,
    },
    Country: {
      type: String,
      require: true,
    },
    Code: {
      type: String,
      require: true,
    },
    City: {
      type: String,
      require: true,
    },
    Longitude: {
      type: Number,
      default: 2546,
    },
    Latitude: {
      type: Number,
      default: 7452,
      require: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Airport", AirportSchema);
