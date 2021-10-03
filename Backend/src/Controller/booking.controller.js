const express = require("express");

const router = express.Router();
const Bookings = require("../Model/booking.model");

router.post("/", async (req, res) => {
  const booking = await Bookings.create(req.body);
  return res.status(201).json({ data: booking });
});

router.get("/", async (req, res) => {
  const bookings = await Bookings.find()
    .populate("customerId")
    .populate("flightId");

  return res.status(200).json({ data: bookings });
});

router.get("/:id", async (req, res) => {
  const booking = await Bookings.findById(req.params.id);

  return res.status(200).json({ data: booking });
});

router.patch("/:id", async (req, res) => {
  const booking = await Bookings.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).json({ data: booking });
});

router.delete("/:id", async (req, res) => {
  const booking = await Bookings.findByIdAndDelete(req.params.id);

  return res.status(200).json({ data: booking });
});

module.exports = router;
