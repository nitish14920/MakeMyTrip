const express = require("express");
const router = express.Router();

const From = require("../Model/from.model");

router.post("/", async (req, res) => {
  try {
    const from = await From.create(req.body);

    return res.status(201).json({ data: from });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const from = await From.find().populate("boardpoint").lean().exec();

    return res.status(200).json({ data: from });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;
