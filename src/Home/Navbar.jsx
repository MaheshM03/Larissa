import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling Down
        setIsVisible(false);
      } else {
        // Scrolling Up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&display=swap');

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          top: 2%;
          left: 50%;
          transform: translateX(-50%);
          width: 70%;
          height: 65px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
          padding: 10px 25px;
          font-family: 'Outfit', sans-serif;
          z-index: 1000;
          color: white;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          transition: top 0.3s ease-in-out;
        }

        .navbar.hidden {
          top: -100px;
        }

        .logo img {
          height: 42px;
          border-radius: 8px;
        }

        .nav-links {
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .nav-links a {
          color: black;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #00ffc8;
          transition: 0.3s ease;
        }

        .nav-links a:hover {
          color: #e90914ff;
        }

        .nav-links a:hover::after {
          width: 100%;
        }

        .book-now {
          padding: 8px 16px;
          background: linear-gradient(150deg, #00ffc8, #000000ff);
          color: #000;
          font-weight: 600;
          border-radius: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .book-now:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(225, 231, 230, 0.3);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 2001;
        }

        .hamburger div {
          width: 25px;
          height: 3px;
          background-color: white;
          margin: 4px 0;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .navbar {
            width: 90%;
            top: 0;
            left: 5%;
            transform: none;
            border-radius: 0 0 16px 16px;
          }

          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 65px;
            left: 0;
            width: 100%;
            flex-direction: column;
            background-color: white;
            padding: 20px 0;
            display: ${isOpen ? 'flex' : 'none'};
            z-index: 2000;
            animation: slideDown 0.3s ease-in-out;
          }

          .book-now {
            margin-top: 10px;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10%);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}</style>

      <nav className={`navbar ${isVisible ? '' : 'hidden'}`}>
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
