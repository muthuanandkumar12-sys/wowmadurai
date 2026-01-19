import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

export default function PaymentSuccess() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const storedBooking = JSON.parse(localStorage.getItem("booking"));

    if (storedBooking) {
      setBooking(storedBooking);

      fetch("http://localhost:5000/api/bookings/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storedBooking),
      });

      localStorage.removeItem("booking");
    }
  }, []);

  

  // 📄 Generate PDF
  const downloadReceipt = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("WOW MADURAI - BOOKING RECEIPT", 20, 20);

    doc.setFontSize(12);
    doc.text(`Hotel Name: ${booking.hotelName}`, 20, 40);
    doc.text(`Customer Name: ${booking.userName}`, 20, 50);
    doc.text(`Check-in Date: ${booking.checkIn}`, 20, 60);
    doc.text(`Check-out Date: ${booking.checkOut}`, 20, 70);
    doc.text(`Amount Paid: ₹${booking.price}`, 20, 80);

    doc.text("Payment Status: SUCCESS", 20, 95);

    doc.setFontSize(10);
    doc.text(
      "Thank you for booking with WOW Madurai!",
      20,
      115
    );

    doc.save("Hotel_Booking_Receipt.pdf");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "#f4f8ff",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#2ecc71" }}>✅ Payment Successful</h1>

      <p>Your hotel booking has been confirmed 🎉</p>

      {/* 📦 Booking Details */}
      {booking && (
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            width: "100%",
            maxWidth: "400px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            margin: "20px 0",
          }}
        >
          <h3>📄 Booking Details</h3>
          <p><strong>Hotel:</strong> {booking.hotelName}</p>
          <p><strong>Name:</strong> {booking.userName}</p>
          <p><strong>Check-in:</strong> {booking.checkIn}</p>
          <p><strong>Check-out:</strong> {booking.checkOut}</p>
          <p><strong>Amount Paid:</strong> ₹{booking.price}</p>
          {/* 📥 Download Button */}
          <button
            onClick={downloadReceipt}
            style={{
              marginTop: "15px",
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "none",
              background: "#27ae60",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            📥 Download Receipt (PDF)
          </button>
        </div>
      )}

      <div>
        <Link to="/hotels">
          <button style={btnStyle}>Back to Hotels</button>
        </Link>

        <Link to="/">
          <button style={{ ...btnStyle, marginLeft: "15px" }}>
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  background: "#4e73df",
  color: "#fff",
  fontSize: "16px",
};
