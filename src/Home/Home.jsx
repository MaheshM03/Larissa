import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
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
    }, 3500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Navbar />
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          font-family: 'Georgia', serif;
          background-color: #f3f3f3;
        }

        .slider-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 1.2s ease-in-out;
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
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
          z-index: 2;
          padding: 0 20px;
        }

        .fixed-text h1 {
          font-size: 3.8rem;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
          margin-bottom: 10px;
        }

        .fixed-text p {
          font-size: 1.5rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .button-group {
          margin-top: 30px;
          display: flex;
          gap: 20px;
        }

        .know-btn {
          padding: 12px 28px;
          background-color: #006699;
          color: white;
          text-decoration: none;
          border-radius: 30px;
          font-weight: bold;
          font-size: 1rem;
          transition: background-color 0.3s ease;
        }

        .know-btn:hover {
          background-color: #004f7a;
        }

        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          z-index: 9999;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .fixed-text h1 {
            font-size: 2.2rem;
          }

          .fixed-text p {
            font-size: 1.1rem;
          }

          .button-group {
            flex-direction: column;
            gap: 15px;
          }
        }
      `}</style>

      <div className="slider-container">
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

      <a
        href="https://wa.me/9762979477"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
