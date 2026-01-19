import React, { useState } from "react";
import "./Hotels.css";

const Hotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [viewHotel, setViewHotel] = useState(null);
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("");
const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

  const [confirmMsg, setConfirmMsg] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("All");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const openMap = (place) => {
    const query = encodeURIComponent(place);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  const hotels = [
    {
      name: "The Gateway Hotel Pasumalai",
      img:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/584307868.jpg?k=23f4eeea886af2f4f7c4d6ff1c8964e1c593bdc367ba5fb5d3ec74facf3a7bb3&o=",
      desc: "Located atop Pasumalai Hill, this heritage hotel offers a panoramic view of Madurai city and Meenakshi Temple.",
      location: "The Gateway Hotel Pasumalai Madurai",
      rating: 5,
      price: 4500,
    },
    {
      name: "Courtyard by Marriott Madurai",
      img: "https://gos3.ibcdn.com/5240b7cc-790d-4cda-bfce-873816118714.jpg",
      desc: "A luxury 5-star stay with a rooftop pool, fine dining, and elegant modern rooms near the city center.",
      location: "Courtyard by Marriott Madurai",
      rating: 5,
      price:4500,
    },
    {
      name: "Heritage Madurai",
      img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/245296962.jpg?k=99246b034e7afc313b4f922a42572d12b1f7bb24b885ec640353b93197ee7f5d&o=",
      desc: "Once a British officers’ club, this iconic property blends colonial charm with lush green surroundings.",
      location: "Heritage Madurai Hotel",
      rating: 4,
      price:3500,
    },
    {
      name: "Fortune Pandiyan Hotel",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/48/d1/dc/caption.jpg",
      desc: "A premium business hotel with classic interiors, fitness center, and excellent hospitality.",
      location: "Fortune Pandiyan Hotel Madurai",
      rating: 4,
      price:3500,
    },
    {
      name: "Regency Madurai by GRT Hotels",
      img: "https://gos3.ibcdn.com/e6e6da82-a716-4044-b079-3baec051ac01.jpg",
      desc: "A contemporary hotel offering comfort and convenience near the railway junction.",
      location: "Regency Madurai by GRT Hotels",
      rating: 4,
      price:3500,
    },
    {
      name: "Hotel Supreme",
     img: "https://content.r9cdn.net/rimg/himg/66/4e/d7/expedia_group-122924-180089374-976389.jpg?width=1366&height=768&crop=true",
      desc: "Budget-friendly hotel featuring rooftop dining with temple views and cozy rooms.",
      location: "Hotel Supreme Madurai",
      rating: 3,
      price:2000,
    },
    {
      name: "The Lost Hostel Madurai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaFl00gddYg38_TURycbInHeoYQdqteXENQ&s",
      desc: "A traveler’s favorite backpacker hostel with a lively vibe, shared kitchen, and clean dorms.",
      location: "The Lost Hostel Madurai",
      rating: 3,
      price:2000,
    },
    {
      name: "Poppys Hotel Madurai",
      img: "https://www.poppyshotels.com/images/madurai/madurai-banquet-banner.webp",
      desc: "Modern 4-star stay with pool, multi-cuisine restaurant, and easy access to Meenakshi Temple.",
      location: "Poppys Hotel Madurai",
      rating: 4,
      price:3500,
    },
    {
      name: "Hotel Temple City",
      img: "https://r1imghtlak.mmtcdn.com/c4359cb2255511ea97580a4cef95d023.jpg",
      desc: "Conveniently located with neat rooms and friendly service, ideal for pilgrims.",
      location: "Hotel Temple City Madurai",
      rating: 3,
      price:2000,
    },
    {
      name: "Royal Court Madurai",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/34207043.jpg?k=c17834e6cb5272e8637d27b2de21a82130300c7c67f9c6422ab45a636e829bc1&o=",
      desc: "Centrally located property with great vegetarian restaurant.",
      location: "Royal Court Madurai",
      rating: 4,
      price:3500,
    },
    {
      name: "Hotel President Madurai",
      img: "data:image/jpeg;base64,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",
      desc: "Affordable stay close to all attractions, known for cleanliness.",
      location: "Hotel President Madurai",
      rating: 3,
      price:2000,
    },
  ];

  // ⭐ Rating Filter Logic
  const filteredHotels =
    ratingFilter === "All"
      ? hotels
      : hotels.filter((h) => h.rating === Number(ratingFilter));
 const handlePayment = async () => {
  if (!userName || !checkIn || !checkOut) {
    alert("Please fill all details");
    return;
  }
    localStorage.setItem(
    "booking",
    JSON.stringify({
      hotelName: selectedHotel.name,
      userName,
      checkIn,
      checkOut,
      price: selectedHotel.price,
    })
  );

  try {
    const res = await fetch(
      "http://localhost:5000/api/payment/create-session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotelName: selectedHotel.name,
          price: selectedHotel.price,
        }),
      }
    );

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url; // 🚀 Stripe redirect
    } else {
      alert("Payment failed");
    }
  } catch (err) {
    console.error(err);
    alert("Payment failed");
  }
};



console.log("Selected Hotel:", selectedHotel);


  return (
    <div className={`hotels-wrap ${theme}`}>
      {/* Theme Toggle */}
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <h1>🏨 Top Hotels in Madurai</h1>

      {/* ⭐ Rating Filter */}
      <div className="hotel-filter">
        <select onChange={(e) => setRatingFilter(e.target.value)}>
          <option value="All">All Ratings</option>
          <option value="5">5 ⭐</option>
          <option value="4">4 ⭐</option>
          <option value="3">3 ⭐</option>
        </select>
      </div>

      <div className="hotels-grid">
        {filteredHotels.map((hotel, index) => (
          <div className="hotel-card" key={index}>
            <img src={hotel.img} alt={hotel.name} />

            <div className="hotel-body">
              <h3>{hotel.name}</h3>
              <p className="desc">{hotel.desc}</p>

              {/* 📍 Clickable location */}
              <p
                className="location map-link"
                onClick={() => openMap(hotel.location)}
              >
                📍 {hotel.location.replace("Madurai", "")}
              </p>
              <p className="price">💵 ₹{hotel.price} / night</p>
              <p className="rating">{"⭐".repeat(hotel.rating)}</p>

              <div className="hotel-buttons">
                <button
                  className="btn"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  Book Now
                </button>
                <button
                  className="btn secondary"
                  onClick={() => setViewHotel(hotel)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View Details Modal */}
{viewHotel && (
        <div className="booking-modal">
          <div className="booking-content view">
            <button className="close-btn" onClick={() => setViewHotel(null)}>
              ✖
            </button>
            <img src={viewHotel.img} alt={viewHotel.name} className="view-img" />
            <h2>{viewHotel.name}</h2>
            <p>{viewHotel.desc}</p>
            <p onClick={() => openMap(viewHotel.location)} className="map-link">
              📍 {viewHotel.location}
            </p>
            <p>{"⭐".repeat(viewHotel.rating)}</p>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {selectedHotel && (
  <div className="booking-modal">
    <div className="booking-content">
  <button className="close-btn" onClick={() => setSelectedHotel(null)}>
    ✖
  </button>

  <h2 className="modal-title">Book Your Stay</h2>

  <div className="form-group">
    <label>Hotel</label>
    <input value={selectedHotel.name} readOnly />
  </div>

  <div className="form-group">
    <label>Your Name</label>
    <input
      placeholder="Enter your name"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
  </div>

  <div className="form-row">
    <div className="form-group">
      <label>Check-in</label>
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label>Check-out</label>
      <input
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
      />
    </div>
  </div>

  <p className="price-text">💰 Price: ₹{selectedHotel.price}</p>

  <button className="pay-btn" onClick={handlePayment}>
    Pay ₹{selectedHotel.price}
  </button>
</div>

  </div>
)}

    </div>
  );
};

export default Hotels;
