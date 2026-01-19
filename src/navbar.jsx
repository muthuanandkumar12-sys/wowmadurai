
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="nav-wrap">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">
            <span className="mark">WOW</span> MADURAI
          </Link>
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <Link onClick={() => setOpen(false)} className={loc.pathname==="/" ? "active" : ""} to="/">Home</Link> 
          <Link onClick={() => setOpen(false)} className={loc.pathname==="/Dashboard" ? "active" : ""} to="/Dashboard">Dashboard</Link>  
          <Link onClick={() => setOpen(false)} className={loc.pathname==="/contact" ? "active" : ""} to="/contact">Contact</Link>
          
        </nav>

        <button className={`nav-toggle ${open ? "open" : ""}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
