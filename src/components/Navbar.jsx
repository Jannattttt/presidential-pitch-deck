"use client"

import { useState } from "react"
import "../styles/Navbar.css"

const Navbar = ({ scrollPosition }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const navbarClass = scrollPosition > 50 ? "navbar scrolled" : "navbar"

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">Reset Ghana</span>
        </div>

        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#hero" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#vision" onClick={() => setMenuOpen(false)}>
              Vision
            </a>
          </li>
          <li>
            <a href="#structure" onClick={() => setMenuOpen(false)}>
              Structure
            </a>
          </li>
          <li>
            <a href="#timeline" onClick={() => setMenuOpen(false)}>
              Timeline
            </a>
          </li>
          <li>
            <a href="#action" onClick={() => setMenuOpen(false)}>
              Action
            </a>
          </li>
          <li>
            <a href="#news-feed" onClick={() => setMenuOpen(false)}>
              Updates
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

