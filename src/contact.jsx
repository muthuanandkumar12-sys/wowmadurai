import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  // ⭐ Survey form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ⭐ Submit survey
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://wowmadurai-backend.onrender.com//api/survey", form);
      alert("Thanks for your feedback ❤️");
      setForm({ name: "", email: "", feedback: "", rating: "" });
    } catch (err) {
      alert("Something went wrong!");
    }
  };

  const styles = {
    section: {
      backgroundColor: "#0d0d0d",
      color: "#f5f5f5",
      minHeight: "100vh",
      padding: "60px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: "0.8s",
    },
    card: {
      background: "rgba(255,255,255,0.06)",
      padding: "25px",
      borderRadius: "16px",
      width: "100%",
      maxWidth: "420px",
      marginBottom: "30px",
    },
    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "8px",
      border: "none",
      marginBottom: "12px",
    },
    btn: {
      background: "linear-gradient(135deg,#00c6ff,#0072ff)",
      color: "#fff",
      padding: "10px",
      width: "100%",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      fontWeight: "600",
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={{ color: "#00ffff", fontSize: "2.4rem" }}>Contact Us 📞</h2>
      <p style={{ color: "#ccc", marginBottom: "30px" }}>
        Got feedback or want to connect? We’d love to hear from you!
      </p>

      
      {/* ⭐ SURVEY FORM */}
      <div style={styles.card}>
        <h3 style={{ color: "#00ffff", marginBottom: "15px" }}>
          Survey & Feedback 📝
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <select
            style={styles.input}
            name="rating"
            value={form.rating}
            onChange={handleChange}
            required
          >
            <option value="">Rate Us ⭐</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Bad</option>
          </select>

          <textarea
            style={styles.input}
            name="feedback"
            placeholder="Your feedback..."
            rows="4"
            value={form.feedback}
            onChange={handleChange}
            required
          />

          <button style={styles.btn}>Submit Survey</button>
        </form>
      </div>

      {/* 📌 Contact Info */}
      <div style={styles.card}>
        <p><FaEnvelope /> wowmadurai@gmail.com</p>
        <p><FaPhoneAlt /> +91 63696 09336</p>
        <p>
          <FaInstagram />{" "}
          <a
            href="https://www.instagram.com/wow_madurai"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#00ffff" }}
          >
            wow_madurai
          </a>
        </p>
      </div>


      <footer style={{ color: "#777" }}>
        © {new Date().getFullYear()} WOW Madurai — Built with ❤️ by Mr Alan
      </footer>
    </section>
  );
}
