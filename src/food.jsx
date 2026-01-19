import React, { useState } from "react";
import "./food.css";

export default function Food() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");

  const foods = [
    {
      img: "https://www.jilljilljigarthanda.com/img/about/about16.jpg",
      name: "Jigarthanda",
      desc: "Madurai’s iconic chilled dessert drink – creamy, cool, and soul-refreshing.",
      hotel: "Famous Jigarthanda",
      category: "Veg",
      platform: "swiggy",
      hotelQuery: "Famous Jigarthanda Madurai",
    },
    {
      img: "https://i.pinimg.com/564x/47/74/86/477486f48831cbea4c5298347513e033.jpg",
      name: "Parotta & Salna",
      desc: "Flaky parotta with spicy salna — Madurai’s late-night legend.",
      hotel: "Konar Mess",
      category: "Veg",
      platform: "zomato",
      hotelQuery: "Konar Mess Madurai",
    },
    {
      img: "https://www.yummytummyaarthi.com/wp-content/uploads/2015/06/1-32.jpg",
      name: "Kari Dosa",
      desc: "Soft dosa layered with spicy mutton — a true Madurai original.",
      hotel: "Konar Kadai",
      category: "Non-Veg",
      platform: "swiggy",
      hotelQuery: "Konar Kadai Madurai",
    },
    {
      img: "https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1432403939.jpg",
      name: "Kothu Parotta",
      desc: "Chopped parotta tossed with egg & meat — street food rhythm!",
      hotel: "Kumar Mess",
      category: "Non-Veg",
      platform: "zomato",
      hotelQuery: "Kumar Mess Madurai",
    },
    {
      img: "https://www.sharmispassions.com/wp-content/uploads/2012/11/Idiyappam6-1-500x500.jpg",
      name: "Idiyappam & Coconut Milk",
      desc: "Soft idiyappam with sweet coconut milk — morning bliss.",
      hotel: "Murugan Idli Kadai",
      category: "Veg",
      platform: "swiggy",
      hotelQuery: "Murugan Idli Kadai Madurai",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34iu5-kfOzmY8xRkxmYSMx4BwneMm1neFR71ijXmmNFX8ZQlQUJPHjfc6GjWtOa6mUfE&usqp=CAU",
      name: "Bun Parotta",
      desc: "Fluffy layered parotta — unique to Madurai!",
      hotel: "Selvi Mess",
      category: "Veg",
      platform: "zomato",
      hotelQuery: "Selvi Mess Madurai",
    },
    {
      img: "https://images.archanaskitchen.com/images/recipes/indian/main-course/south-indian-vegetarian-recipes/kuzhambu-recipes/CHETTINAD_SURA_MEEN_KUZHAMBU_SHARK_FISH_CURRY_6db2cc5578.jpg",
      name: "Meen Kuzhambu",
      desc: "Tangy fish curry with authentic southern spices.",
      hotel: "Amma Mess",
      category: "Non-Veg",
      platform: "swiggy",
      hotelQuery: "Amma Mess Madurai",
    },
    {
      img: "https://www.jinooskitchen.com/wp-content/uploads/2018/07/mutton-sukka-final.jpg",
      name: "Mutton Chukka",
      desc: "Dry-fried mutton with pepper & curry leaves.",
      hotel: "Konar Kadai",
      category: "Non-Veg",
      platform: "zomato",
      hotelQuery: "Konar Kadai Madurai",
    },
    {
      img: "https://shrisangeethasrestaurant.com/cdn/shop/files/Aappam.webp",
      name: "Aappam & Stew",
      desc: "Crispy edged aappam with creamy coconut stew.",
      hotel: "Sree Sabarees",
      category: "Veg",
      platform: "swiggy",
      hotelQuery: "Sree Sabarees Madurai",
    },
    {
      img: "data:image/jpeg;base64,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",
      name: "Madurai Veg Meals",
      desc: "Traditional South Indian meals on banana leaf.",
      hotel: "Sree Sabarees",
      category: "Veg",
      platform: "zomato",
      hotelQuery: "Sree Sabarees Madurai",
    },
  ];

  /* ⭐ Generate Swiggy / Zomato hotel search link */
  const getOrderLink = (food) => {
    const query = encodeURIComponent(food.hotelQuery);
    return food.platform === "swiggy"
      ? `https://www.swiggy.com/search?query=${query}`
      : `https://www.zomato.com/madurai/search?q=${query}`;
  };

  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <section className={`page-wrap ${darkMode ? "dark" : ""}`}>
      {/* 🌙 Dark Mode Toggle */}
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

      <h2 className="page-title" style={{ color: "brown" }}>
        Madurai Food Scene 🍲
      </h2>

      <p className="lead">
        From jigarthanda stalls to kari dosas, Madurai serves soulful flavours.
      </p>

      {/* 🍽️ Category Filter */}
      <div className="filter-wrap">
        <button
          className={category === "All" ? "active" : ""}
          onClick={() => setCategory("All")}
        >
          All
        </button>
        <button
          className={category === "Veg" ? "active" : ""}
          onClick={() => setCategory("Veg")}
        >
          Veg 
        </button>
        <button
          className={category === "Non-Veg" ? "active" : ""}
          onClick={() => setCategory("Non-Veg")}
        >
          Non-Veg 
        </button>
      </div>

      {/* 🍴 Food Grid */}
      <div className="food-grid">
        {filteredFoods.map((f, idx) => (
          <div className="food-card" key={idx}>
            <div className="img-wrap">
              <img src={f.img} alt={f.name} />
            </div>

            <div className="food-body">
              <h3>{f.name}</h3>
              <p>{f.desc}</p>
              <span className="hotel">Famous at – {f.hotel}</span>

              <a
                href={getOrderLink(f)}
                target="_blank"
                rel="noopener noreferrer"
                className="order-btn"
              >
                Order Now 🍽️
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
