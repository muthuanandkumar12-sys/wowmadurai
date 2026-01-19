import React, { useState } from "react";
import "./cafes.css";

const cafes = [
  {
    name: "Cafe Coffee Day",
    desc: "Chill vibes, coffee, and snacks — perfect for a quick meet.",
    img: "https://www.shutterstock.com/image-photo/mumbai-india-feb-23-cafe-600nw-2605028205.jpg",
    location: "Cafe Coffee Day Anna Nagar Madurai"
  },
  {
    name: "The Tea Coterie",
    desc: "Specialty teas with a cozy ambiance — unwind and relax.",
    img: "https://content3.jdmagicbox.com/v2/comp/madurai/p3/0452px452.x452.230128190539.u9p3/catalogue/the-tea-coterie-kk-nagar-madurai-madurai-tea-lounges-2p593vkc51.jpg",
    location: "The Tea Coterie KK Nagar Madurai"
  },
  {
    name: "Chocolate Room",
    desc: "Desserts and coffee heaven — a sweet retreat.",
    img: "https://media-cdn.tripadvisor.com/media/photo-s/11/fe/53/96/getlstd-property-photo.jpg",
    location: "Chocolate Room KK Nagar Madurai"
  },
  {
    name: "Cafe 99",
    desc: "Modern café vibes with local flavor-infused drinks.",
    img: "https://content.jdmagicbox.com/v2/comp/madurai/d8/0452px452.x452.231228120017.j5d8/catalogue/99cafe-madurai-restaurants-c4f7mrwbsl-250.jpg",
    location: "Cafe 99 Chinna Chokkikulam Madurai"
  },
  {
    name: "Pamba Cafe",
    desc: "Freshly brewed artisan coffee — for the coffee connoisseur.",
    img: "https://b.zmtcdn.com/data/pictures/6/21550286/60e62e29c8e0632f7f89f3c16b558d36.jpeg",
    location: "Pamba Cafe Anna Nagar Madurai"
  },
  {
    name: "Waffles & Brew",
    desc: "Crispy waffles, milkshakes, and cozy interiors — a fun hangout spot.",
    img: "https://content.jdmagicbox.com/v2/comp/chennai/q8/044pxx44.xx44.230207181314.t8q8/catalogue/waffle-n-brew-kilpauk-chennai-waffle-centres-jcKMJvbKQ5.jpg",
    location: "Waffles & Brew KK Nagar Madurai"
  },
  {
    name: "Brewberrys Cafe",
    desc: "Vibrant and youthful place for coffee lovers and snack fans.",
    img: "https://www.smergers.com/media/cache/aa/f9/aaf99ccecdc84a5b36d5d6711db61242.jpg",
    location: "Brewberrys Cafe Alagar Kovil Road Madurai"
  },
  {
    name: "Nastha Cafe",
    desc: "Elegant decor, delicious sandwiches, and freshly brewed coffee.",
    img: "https://b.zmtcdn.com/data/pictures/1/20519131/2de51ebf13b80485d98425c21e9aaa53.jpg",
    location: "Nastha Cafe KK Nagar Madurai"
  },
  {
    name: "Fruit Bea",
    desc: "Trendy spot for continental dishes and aromatic cappuccinos.",
    img: "https://lh3.googleusercontent.com/VkKplSzzGRruDGtnSiJjMkDnK5YUoVG0Plpmn9lXUl7I2M2oA02eSvTE1VDKNipmlCLnBeH9Cbb8RHvHxeiuH6QvtufLeExIWWAYf8A=w1200-rw",
    location: "Fruit Bea Cafe KK Nagar Madurai"
  }
];

export default function Cafes() {
  const [darkMode, setDarkMode] = useState(false);

  // 🌍 Google Maps redirect
  const openMap = (place) => {
    const query = encodeURIComponent(place);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${query}`,
      "_blank"
    );
  };

  return (
    <section className={`page-wrap cafes-page ${darkMode ? "dark" : ""}`}>
      
      {/* 🌗 Theme Toggle */}
      <div className="toggle-wrap">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <span className="slider"></span>
        </label>
        <span className="mode-text">
          {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </span>
      </div>

      <h2 className="page-title">☕ Best Cafes in Madurai</h2>
      <p className="lead">
        Discover top cafes where you can enjoy coffee, snacks, and chill vibes.
      </p>

      <div className="cafes-grid">
        {cafes.map((cafe, idx) => (
          <div className="cafe-card" key={idx}>
            <div className="img-wrap">
              <img src={cafe.img} alt={cafe.name} />
            </div>

            <div className="cafe-body">
              <h3>{cafe.name}</h3>
              <p>{cafe.desc}</p>

              {/* 📍 Clickable Location */}
              <span
                className="location map-link"
                onClick={() => openMap(cafe.location)}
              >
                📍 {cafe.location.replace("Madurai", "")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
