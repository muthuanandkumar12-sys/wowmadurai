import React, { useState } from "react";
import axios from "axios";
import "./touristPlaces.css";

const places = [
  {
    id: 1,
    name: "Meenakshi Amman Temple",
    image:
      "https://www.clubmahindra.com/blog/media/section_images/placestovi-4bc8914dee0ace7.webp",
    desc: "An architectural marvel dedicated to Goddess Meenakshi and Lord Sundareswarar.",
    category: "Temple",
    mapUrl: "https://www.google.com/maps?q=Meenakshi+Amman+Temple+Madurai",
  },
  {
    id: 2,
    name: "Thirumalai Nayakkar Mahal",
    image:
      "https://remotetraveler.com/wp-content/uploads/2014/10/Thirumalai-Nayak-Palace-Madurai.jpg",
    desc: "17th century palace with Indo-Saracenic architecture.",
    category: "Historical",
    mapUrl: "https://www.google.com/maps?q=Thirumalai+Nayakkar+Mahal+Madurai",
  },
  {
    id: 3,
    name: "Gandhi Memorial Museum",
    image:
      "https://www.trawell.in/admin/images/upload/705432486Gandhi_Museum_Main.jpg",
    desc: "Museum dedicated to Mahatma Gandhi.",
    category: "Historical",
    mapUrl: "https://www.google.com/maps?q=Gandhi+Memorial+Museum+Madurai",
  },
  {
    id: 4,
    name: "Athisayam Theme Park",
    image:
      "https://www.joonsquare.com/usermanage/image/business/athisayam-theme-park-madurai-11427/athisayam-madurai-athisayam-water-park-3.jpg",
    desc: "Popular amusement and water park.",
    category: "Nature",
    mapUrl: "https://www.google.com/maps?q=Athisayam+Theme+Park+Madurai",
  },
  {
    id: 5,
    name: "Alagar Kovil",
    image:
      "https://evendo.com/images/0001/330x209/d2204db9-2633-449a-85bf-7fef386de8ed.jpg",
    desc: "Temple dedicated to Lord Vishnu in Alagar Hills.",
    category: "Temple",
    mapUrl: "https://www.google.com/maps?q=Alagar+Kovil+Madurai",
  },
  {
    id: 6,
    name: "Samanar Hills",
    image:
      "data:image/jpeg;base64,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",
    desc: "Ancient Jain hill with rock-cut sculptures.",
    category: "Historical",
    mapUrl: "https://www.google.com/maps?q=Samanar+Hills+Madurai",
  },
  {
    id: 7,
    name: "Pazhamudhircholai Temple",
    image:
      "https://maduraitourism.co.in/images/places-to-visit/headers/pazhamudircholai-pazhamudhir-solai-temple-madurai-tourism-entry-fee-timings-holidays-reviews-header.jpg",
    desc: "Murugan temple amidst lush greenery.",
    category: "Temple",
    mapUrl: "https://www.google.com/maps?q=Pazhamudhircholai+Temple",
  },
  {
    id: 8,
    name: "Koodal Azhagar Temple",
    image:
      "https://tntemplesproject.in/wp-content/uploads/2019/04/2019-4-28-8-gv18-2-5-koodalazhagar-madurai-madurai-external-1.jpg",
    desc: "Ancient Vishnu temple in Madurai city.",
    category: "Temple",
    mapUrl: "https://www.google.com/maps?q=Koodal+Azhagar+Temple+Madurai",
  },
  {
    id: 9,
    name: "Thiruparankundram Temple",
    image:
      "https://media.assettype.com/outlooktraveller%2F2023-08%2Fbc42e675-393d-4f26-9e21-8c0caae03536%2Fshutterstock_2294010155.jpg?w=1200",
    desc: "One of the six abodes of Lord Murugan.",
    category: "Temple",
    mapUrl: "https://www.google.com/maps?q=Thiruparankundram+Temple",
  },
  {
    id: 10,
    name: "Vandiyur Mariamman Teppakulam",
    image:
      "https://maduraitourism.co.in/images/places-to-visit/headers/vandiyur-mariamman-teppakulam-madurai-entry-fee-timings-holidays-reviews-header.jpg",
    desc: "Famous temple tank with float festival.",
    category: "Historical",
    mapUrl:
      "https://www.google.com/maps?q=Vandiyur+Mariamman+Teppakulam",
  },
  {
    id: 11,
    name: "Yanamalai Hill",
    image:
      "https://miro.medium.com/v2/resize:fit:2000/1*n0dyX_wKcPm5v8sMD9RQOQ.jpeg",
    desc: "Hill with Jain sculptures and city views.",
    category: "Historical",
    mapUrl: "https://www.google.com/maps?q=Yanamalai+Hill+Madurai",
  },
  {
    id: 12,
    name: "Kutladampatti Falls",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/09/db/ee/51/kutladampatti-falls.jpg",
    desc: "Beautiful waterfall near Madurai.",
    category: "Nature",
    mapUrl: "https://www.google.com/maps?q=Kutladampatti+Falls",
  },
];

export default function TouristPlaces() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPlaces = places.filter((place) => {
    const matchSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || place.category === category;
    return matchSearch && matchCategory;
  });

  const addToFavorites = async (place) => {
    const userId = localStorage.getItem("userId");
    try {
      await axios.post("https://wowmadurai-backend.onrender.com/api/auth/add-favorite", {
        userId,
        place,
      });
      alert("Added to favorites ❤️");
    } catch {
      alert("Already added");
    }
  };

  return (
    <div className="tourist-container">
      <h2 className="tourist-title">
        Explore Madurai’s Top Tourist Places 🏞️
      </h2>

      {/* Search & Filter */}
      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="Search tourist places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Temple">Temple</option>
          <option value="Historical">Historical</option>
          <option value="Nature">Nature</option>
        </select>
      </div>

      <div className="places-grid">
        {filteredPlaces.map((place) => (
          <div key={place.id} className="place-card">
            <img src={place.image} alt={place.name} />
            <h3>{place.name}</h3>

            <div className="card-actions">
              <button className="view-btn details" onClick={() => setSelected(place)}>
                View Details
              </button>

              <button className="view-btn favorites"onClick={() => addToFavorites(place)}>
                ❤️ Add to Favorites
              </button>

              <button className="view-btn map"
                onClick={() => window.open(place.mapUrl, "_blank")}
              >
                📍 View on Map
              </button>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p>{selected.desc}</p>

            <button
              onClick={() => window.open(selected.mapUrl, "_blank")}
            >
              📍 Open in Google Maps
            </button>

            <button onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
