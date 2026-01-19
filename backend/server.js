require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const surveyRoutes = require("./routes/surveyRoutes");
const paymentRoutes = require("./routes/paymentRoutes"); 
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/survey", surveyRoutes);
app.use("/api/payment",paymentRoutes);
app.use("/api/bookings", bookingRoutes);




mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err.message));
app.use("/api/auth", authRoutes);
app.use("/api/survey", surveyRoutes);

app.get("/", (req, res) => {
  res.send("WOW MADURAI BACKEND LIVE 🚀");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
