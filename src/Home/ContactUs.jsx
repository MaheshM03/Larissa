import React from 'react';
import Footer from './Footer';
import { FaEnvelope, FaGlobe, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Open+Sans&display=swap');

        .larissa-card {
          max-width: 1100px;
          margin: 80px auto;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
          font-family: 'Open Sans', sans-serif;
          background-color: #fff;
        }

        .larissa-card-top {
          background: linear-gradient(135deg, #546e7a, #263238);
          color: white;
          text-align: center;
          padding: 50px 30px 40px;
        }

        .larissa-logo {
          font-size: 70px;
          margin-bottom: 20px;
        }

        .larissa-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 42px;
          letter-spacing: 4px;
          color: #f1f1f1;
        }

        .larissa-pattern {
          width: 100px;
          height: 3px;
          background: #ffffff;
          margin: 20px auto;
        }

        .larissa-subtitle {
          font-size: 14px;
          margin-top: 10px;
          opacity: 0.8;
        }

        .larissa-content-row {
          display: flex;
          flex-direction: row;
          background-color: #fff;
          color: #444;
        }

        .larissa-contact {
          width: 50%;
          padding: 40px;
          box-sizing: border-box;
          background-color: #fafafa;
        }

        .larissa-contact p {
          margin: 18px 0;
          display: flex;
          align-items: flex-start;
          font-size: 16px;
        }

        .larissa-contact svg {
          margin-right: 12px;
          color: #4a2c8c;
          min-width: 20px;
          margin-top: 3px;
        }

        .larissa-map {
          width: 50%;
          height: auto;
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
      `}</style>

      <div className="larissa-card">
        {/* Top Section */}
        <div className="larissa-card-top">
          <div className="larissa-logo">🏛️</div>
          <h1 className="larissa-brand-name">LÀRISSA</h1>
          <div className="larissa-pattern"></div>
          <p className="larissa-subtitle">Operated By – M & N Hospitality Services</p>
        </div>

        {/* Side-by-side Contact and Map */}
        <div className="larissa-content-row">
          <div className="larissa-contact">
            <p><FaMapMarkerAlt /> Larissa Resort, Vineyard Trail,<br />Gangapur Road, Nashik, Maharashtra – 422222</p>
            <p><FaPhoneAlt /> +91 976-297-9477</p>
            <p><FaEnvelope /> stay@larissaresorts.in</p>
            <p><FaGlobe /> www.larissaresorts.in</p>
          </div>

          <iframe
            className="larissa-map"
            src="https://www.google.com/maps?q=20.0116301,73.7594472&hl=es;z=14&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Larissa Resort Updated Location"
          ></iframe>
        </div>
      </div>

      <Footer />
    </>
  );
}
