import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const slides = [
    {
      image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?w=1600',
      title: 'Welcome to Paradise',
      subtitle: 'Enjoy your stay with us',
    },
    {
      image: 'https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?w=1600',
      title: 'Adventure Awaits',
      subtitle: 'Explore thrilling activities',
    },
    {
      image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1600',
      title: 'Luxury & Comfort',
      subtitle: 'Relax in style',
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600',
      title: 'Nature Retreat',
      subtitle: 'Reconnect with peace',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background-color: #f9f9f9;
        }

        .slider-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .slide-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1s ease-in-out;
          z-index: 0;
        }

        .slide.active {
          opacity: 1;
          z-index: 1;
        }

        .fixed-text {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2));
          text-align: center;
          padding: 0 20px;
          z-index: 2;
          animation: fadeIn 1s ease;
        }

        .fixed-text h1 {
          font-size: 3.5rem;
          font-weight: 600;
          text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.6);
          margin: 0 0 10px;
        }

        .fixed-text p {
          font-size: 1.4rem;
          margin: 0;
          text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
        }

        .button-group {
          margin-top: 30px;
        }

        .know-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #007acc, #005999);
          color: white;
          border: none;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .know-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(135deg, #005999, #003f66);
        }

        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          z-index: 999;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .fixed-text h1 {
            font-size: 2.2rem;
          }

          .fixed-text p {
            font-size: 1.1rem;
          }

          .know-btn {
            font-size: 0.9rem;
            padding: 10px 24px;
          }
        }
      `}</style>

      <div className="slider-container">
        <div className="slide-wrapper">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === current ? 'active' : ''}`}
            />
          ))}

          <div className="fixed-text">
            <h1>{slides[current].title}</h1>
            <p>{slides[current].subtitle}</p>
            <div className="button-group">
              <a href="/about" className="know-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/9762979477"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <Footer />
    </>
  );
}
