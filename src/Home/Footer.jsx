import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Activities', path: '/activities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Amenities', path: '/amenities' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        .footer {
          background-color: #3e3e3e;
          color: #f4f1ec;
          padding: 40px 20px;
          text-align: center;
          font-family: 'Open Sans', sans-serif;
          position: relative;
        }

        .footer-nav {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 30px;
          margin-bottom: 25px;
        }

        .footer-link {
          color: #f4f1ec;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
          position: relative;
          transition: all 0.3s ease;
        }

        .footer-link:hover {
          color: #b08968 !important;
        }

        .footer-link::after {
          content: '';
          display: block;
          width: 0;
          height: 2px;
          background: #b08968;
          transition: width 0.3s;
          margin: auto;
          margin-top: 5px;
        }

        .footer-link:hover::after {
          width: 50%;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 25px 0;
        }

        .footer-social a {
          color: #f4f1ec;
          font-size: 18px;
          transition: color 0.3s;
        }

        .footer-social a:hover {
          color: #b08968;
        }

        .footer-back-to-top {
          position: absolute;
          right: 20px;
          top: 20px;
          background: #b08968;
          color: white;
          border: none;
          border-radius: 50%;
          width: 38px;
          height: 38px;
          cursor: pointer;
          font-size: 18px;
          transition: background 0.3s;
        }

        .footer-copyright {
          font-size: 13px;
          color: #dcdcdc;
          letter-spacing: 0.5px;
          margin-top: 20px;
        }

        @media (max-width: 480px) {
          .footer-link {
            font-size: 13px;
          }

          .footer-social a {
            font-size: 16px;
          }

          .footer-back-to-top {
            top: 10px;
            right: 10px;
          }
        }
      `}</style>

      <div className="footer">
        <button
          className="footer-back-to-top"
          onClick={scrollToTop}
          title="Back to Top"
        >
          ↑
        </button>

        <div className="footer-nav">
          {navItems.map((item, index) => (
            <Link key={index} to={item.path} className="footer-link">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        </div>

        <div className="footer-copyright">
          © {new Date().getFullYear()} Larissa. All rights reserved.
        </div>
      </div>
    </>
  );
}
