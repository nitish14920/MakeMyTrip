const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    flightId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "flight",
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customer",
      required: true,
    },
    fare: {
      type: Number,
      required: true,
    },
    passengerDetails: [
      {
        name: { type: String, required: true },
        gender: { type: String, required: true },
        age: { type: Number, required: true },
      },
    ],

    seats: {
      type: [Number],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    couponCode: {
      type: String,
    },
    isTripInsurance: {
      type: Boolean,
      required: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Bookings = mongoose.model("booking", bookingSchema);
module.exports = Bookings;
