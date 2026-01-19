const express = require("express");
const router = express.Router();
const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/create-session", async (req, res) => {
  try {
    const { hotelName, price } = req.body;

    console.log("💳 Stripe request:", hotelName, price);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: hotelName,
            },
            unit_amount: price * 100, // IMPORTANT
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:5173/payment-success",
      cancel_url: "http://localhost:5173/payment-cancel",
    });

    console.log("✅ Stripe session created:", session.url);

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

console.log("Stripe Key Loaded:", process.env.STRIPE_SECRET_KEY ? "YES" : "NO");

console.log("Stripe Key:", process.env.STRIPE_SECRET_KEY);


module.exports = router;
