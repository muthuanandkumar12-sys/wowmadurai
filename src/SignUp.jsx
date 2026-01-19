import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function SignUp() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/signup",
        form
      );

      alert(res.data.message);
      navigate("/signin");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server error. Try again later.");
      }
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            autoComplete="off"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="new-email"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={handleChange}
            required
          />

          <button type="submit">Create Account</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
}
