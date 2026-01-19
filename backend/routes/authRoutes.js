const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

/* ================= SIGNUP ================= */
router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
  console.error("SIGNUP ERROR FULL DETAILS 👇");
  console.error(error);
  res.status(500).json({ message: error.message });
}

});

/* ================= SIGNIN ================= */
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // ❌ Email wrong
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ Compare hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    // ❌ Password wrong
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // ✅ LOGIN SUCCESS → HERE 👇
    res.status(200).json({
      message: "Login successful",
      userId: user._id,   // ⭐ THIS LINE YOU ASKED ABOUT
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/* ================= ADD TO FAVORITES ================= */
router.post("/add-favorite", async (req, res) => {
  const { userId, place } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const alreadyAdded = user.favorites.find(
      (fav) => fav.placeId === place.id
    );

    if (alreadyAdded) {
      return res.status(400).json({ message: "Already in favorites" });
    }

    user.favorites.push({
      placeId: place.id,
      name: place.name,
      image: place.image,
      category: place.category,
    });

    await user.save();

    res.status(200).json({ message: "Added to favorites" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
