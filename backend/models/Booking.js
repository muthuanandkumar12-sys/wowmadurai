const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  
     {
    
    hotelName: String,
    userName: String,
    checkIn: String,
    checkOut: String,
    price: Number,
    paymentStatus: {
      type: String,
      default: "paid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
