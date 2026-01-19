import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    img: "https://th-i.thgim.com/public/incoming/5f9g62/article68321082.ece/alternates/LANDSCAPE_1200/Goripalayam%20-02.jpg",
    title: "Welcome to Madurai",
    subtitle: "The Soul of Tamil Nadu — where tradition meets timeless beauty.",
  },
  {
    img: "https://oneday.tours/wp-content/uploads/one-day-madurai-local-sightseeing-tour-package-private-cab-header.jpg",
    title: "Culture & Devotion",
    subtitle: "Home to ancient temples, majestic art, and divine spirit.",
  },
  {
    img: "https://hblimg.mmtcdn.com/content/hubble/img/desttvimg/mmt/destination/m_Madurai_tv_destination_img_5_l_802_1202.jpg",
    title: "Explore the City",
    subtitle: "From bustling markets to royal palaces — experience it all.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${slides[index].img})` }}
      >
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>{slides[index].title}</h1>
          <p>{slides[index].subtitle}</p>

          {/* Discover More → Signup */}
          <Link to="/SignIn" className="explore-btn">
            Discover More
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Experience Madurai</h2>

        <div className="card-grid">
          <div className="card">
            <img
              src="https://travel2tamilnadu.com/wp-content/uploads/2024/07/fevestival.png"
              alt="Culture"
            />
            <h3>Culture & Festivals</h3>
            <p>
              Witness the Chithirai Festival, Pongal celebrations, and the
              timeless heritage of Tamil Nadu.
            </p>
          </div>

          <div className="card">
            <img
              src="https://gayathriscookspot.com/wp-content/uploads/2013/12/DSC_00851.jpg"
              alt="Food"
            />
            <h3>Street Food</h3>
            <p>
              Savor Madurai’s famous Jigarthanda, Kari Dosa, and delicious
              Parotta — a feast for every foodie.
            </p>
          </div>

          <div className="card">
            <img
              src="https://static.toiimg.com/thumb/107052734/Meenakshi-Amman-Temple.jpg?width=1200&height=900"
              alt="Heritage"
            />
            <h3>Heritage & Temples</h3>
            <p>
              Explore Meenakshi Amman Temple, Thirumalai Nayakkar Palace, and
              more ancient wonders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
