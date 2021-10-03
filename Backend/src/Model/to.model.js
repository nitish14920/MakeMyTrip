const mongoose = require("mongoose");

const toSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("to", toSchema);
