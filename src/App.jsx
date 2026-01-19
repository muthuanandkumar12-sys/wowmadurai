import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./navbar";
import Home from "./home";
import Food from "./food";
import Contact from "./contact";
import Touristplaces from "./TouristPlaces";
import Hotels from "./hotels";
import Cafe from "./cafe";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import PaymentSuccess from "./PaymentSuccess";
import PaymentCancel from "./PaymentCancel";

import useScrollAnimation from "./useScrollAnimation";


export default function App() {
  useScrollAnimation();

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/touristplaces" element={<Touristplaces />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-cancel" element={<PaymentCancel />} />
          {/* Auth Pages – THIS WAS MISSING ❗ */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </Router>
  );
}
