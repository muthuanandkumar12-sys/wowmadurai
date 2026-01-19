import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Auth.css";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:5000/api/auth/signin",
      { email, password }
    );

    alert(res.data.message);

    // ⭐ IMPORTANT FIX
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userId", res.data.userId);

    navigate("/dashboard");
  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input
            type="email"
            placeholder="Email Address"
            autoComplete="new-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <p>
          Don’t have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}
