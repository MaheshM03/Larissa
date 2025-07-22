import React, { useEffect } from 'react';
import Footer from './Footer';
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactUs() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Open+Sans&display=swap');

        body {
          background: url('https://www.transparenttextures.com/patterns/greek-vine.png');
        }

        .larissa-card {
          max-width: 1100px;
          margin: 120px auto 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          font-family: 'Open Sans', sans-serif;
          background-color: #fff;
        }

        .larissa-card-top {
          background: linear-gradient(135deg, #37474f, #212121);
          color: white;
          text-align: center;
          padding: 60px 30px 50px;
        }

        .larissa-logo {
          font-size: 72px;
          margin-bottom: 20px;
        }

        .larissa-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 44px;
          letter-spacing: 5px;
          color: #ffffff;
        }

        .larissa-pattern {
          width: 90px;
          height: 3px;
          background: #ffffff;
          margin: 22px auto;
        }

        .larissa-subtitle {
          font-size: 15px;
          margin-top: 10px;
          opacity: 0.85;
        }

        .larissa-content-row {
          display: flex;
          flex-direction: row;
          background-color: #fff;
          color: #333;
        }

        .larissa-contact {
          width: 50%;
          padding: 40px;
          background-color: #f9f9f9;
        }

        .larissa-contact p {
          margin: 18px 0;
          display: flex;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.6;
        }

        .larissa-contact svg {
          margin-right: 12px;
          color: #4a2c8c;
          min-width: 20px;
          margin-top: 4px;
        }

        .larissa-map {
          width: 50%;
          min-height: 400px;
          border: none;
        }

        @media (max-width: 768px) {
          .larissa-content-row {
            flex-direction: column;
          }

          .larissa-contact,
          .larissa-map {
            width: 100%;
            padding: 30px;
          }

          .larissa-map {
            height: 300px;
          }
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
      `}</style>

      {/* WhatsApp Quick Contact Button */}
      <a
        className="whatsapp-float"
        href="https://wa.me/919762979477"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>

      <motion.div
        className="larissa-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="larissa-card-top" data-aos="fade-down">
          <div className="larissa-logo">🏛️</div>
          <h1 className="larissa-brand-name">LÀRISSA</h1>
          <div className="larissa-pattern"></div>
          <p className="larissa-subtitle">Operated By – M & N Hospitality Services</p>
        </div>

        <div className="larissa-content-row">
          <div className="larissa-contact" data-aos="fade-right">
            <p><FaMapMarkerAlt /> Larissa Resort, Vineyard Trail,<br />Gangapur Road, Nashik, Maharashtra – 422222</p>
            <p><FaPhoneAlt /> +91 976-297-9477</p>
            <p><FaEnvelope /> stay@larissaresorts.in</p>
            <p><FaGlobe /> www.larissaresorts.in</p>
          </div>

          {/* Google Map centered on 19.99727, 73.79096 */}
          <iframe
            className="larissa-map"
            data-aos="fade-left"
            src="https://www.google.com/maps?q=19.99727,73.79096&hl=es;z=14&output=embed"
            allowFullScreen=""
            loading="lazy"
            title="Larissa Resort Location"
          ></iframe>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
