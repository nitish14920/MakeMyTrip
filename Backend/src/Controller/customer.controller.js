const express = require("express");

const router = express.Router();
const Customers = require("../Model/customer.model");

router.post("/", async (req, res) => {
  const customer = await Customers.create(req.body);
  return res.status(201).json({ data: customer });
});

router.get("/", async (req, res) => {
  const customers = await Customers.find();

  return res.status(200).json({ data: customers });
});

router.get("/:id", async (req, res) => {
  const customer = await Customers.findById(req.params.id);

  return res.status(200).json({ data: customer });
});

router.patch("/:id", async (req, res) => {
  const customer = await Customers.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  return res.status(200).json({ data: customer });
});

router.delete("/:id", async (req, res) => {
  const customer = await Customers.findByIdAndDelete(req.params.id);

  return res.status(200).json({ data: customer });
});

module.exports = router;
