import { useEffect, useState } from "react";

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://wowmadurai-backend.onrender.com/api/bookings/all")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>📜 Booking History</h2>

      {bookings.length === 0 && <p>No bookings yet</p>}

      {bookings.map((b) => (
        <div
          key={b._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>{b.hotelName}</h3>
          <p>👤 {b.userName}</p>
          <p>📅 {b.checkIn} → {b.checkOut}</p>
          <p>💰 ₹{b.price}</p>
          <p>✅ {b.paymentStatus}</p>
        </div>
      ))}
    </div>
  );
}
