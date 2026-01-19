const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

/* SAVE BOOKING */
router.post("/add", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: "Booking saved" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


/* GET ALL BOOKINGS */
router.get("/all", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
