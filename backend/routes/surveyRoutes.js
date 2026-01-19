const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey");

// POST survey data
router.post("/", async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json({ message: "Survey submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to submit survey" });
  }
});

module.exports = router;
