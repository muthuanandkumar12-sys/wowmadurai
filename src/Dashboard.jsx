import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h1>Welcome to WOW Madurai</h1>
      <p>Choose what you want to explore</p>

      <div className="dashboard-grid">
        <div
          className="dash-card tourist"
          onClick={() => navigate("/touristplaces")}
        >
          <div className="card-overlay">
            <h3>Tourist Places</h3>
            <p>Explore famous attractions</p>
          </div>
        </div>

        <div
          className="dash-card hotels"
          onClick={() => navigate("/hotels")}
        >
          <div className="card-overlay">
            <h3>Hotels</h3>
            <p>Find best places to stay</p>
          </div>
        </div>

        <div
          className="dash-card food"
          onClick={() => navigate("/food")}
        >
          <div className="card-overlay">
            <h3>Food</h3>
            <p>Taste Madurai specials</p>
          </div>
        </div>

        <div
          className="dash-card cafe"
          onClick={() => navigate("/cafe")}
        >
          <div className="card-overlay">
            <h3>Cafe</h3>
            <p>Relax at popular cafes</p>
          </div>
        </div>
      </div>
    </div>
  );
}
