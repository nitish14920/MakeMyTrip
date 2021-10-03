const express = require("express");
const router = express.Router();

const To = require("../Model/to.model");

router.post("/", async (req, res) => {
  try {
    const to = await To.create(req.body);

    return res.status(201).json({ data: to });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const to = await To.find().lean().exec();

    return res.status(200).json({ data: to });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;
