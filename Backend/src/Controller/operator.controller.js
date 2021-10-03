const express = require("express");
const router = express.Router();

const Operator = require("../Model/operator.model");

router.post("/", async (req, res) => {
  try {
    const operator = await Operator.create(req.body);

    return res.status(201).json({ data: operator });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const operator = await Operator.find().lean().exec();

    return res.status(200).json({ data: operator });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = router;
