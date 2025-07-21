import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: purple;
          position: fixed;
          top: 3%;
          left: 50%;
          transform: translateX(-50%);
          width: 65%;
          height: 60px;
          color: white;
          padding: 10px 20px;
          font-family: 'Segoe UI', sans-serif;
          z-index: 1000;
          backdrop-filter: blur(5px);
          box-sizing: border-box;
          border-radius: 8px;
        }

        .logo {
          display: flex;
          align-items: center;
          padding-right: 15px;
        }

        .logo img {
          height: 40px;
          width: auto;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #00ffc8;
        }

        .book-now {
          padding: 6px 12px;
          background-color: blue;
          color: black;
          border-radius: 20px;
          font-weight: bold;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }

        .book-now:hover {
          background-color: #00d6a4;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 3px 0;
        }

        @media (max-width: 768px) {
          .navbar {
            width: 100%;
            left: 0;
            transform: none;
            top: 0;
            border-radius: 0;
            padding: 10px 15px;
          }

          .hamburger {
            display: flex;
          }

          .nav-links {
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            position: absolute;
            top: 60px;
            left: 0;
            width: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            padding: 20px 0;
            gap: 15px;
            text-align: center;
            z-index: 999;
          }

          .book-now {
            margin-top: 10px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="logo">
          <img
            src="https://plus.unsplash.com/premium_photo-1668902219322-08c0b1f3c12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0JTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Logo"
          />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="nav-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/activities" onClick={closeMenu}>Activities</Link>
          <Link to="/amenities" onClick={closeMenu}>Amenities</Link>
          <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
          <Link to="/reviews" onClick={closeMenu}>Reviews</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          <Link to="/book" className="book-now" onClick={closeMenu}>Book Now</Link>
        </div>
      </nav>
    </>
  );
}
