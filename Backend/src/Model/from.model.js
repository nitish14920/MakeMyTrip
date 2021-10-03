const mongoose = require("mongoose");

const fromSchema = new mongoose.Schema(
  {
    from: { type: String, required: true },
    boardpoint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "board",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("from", fromSchema);
