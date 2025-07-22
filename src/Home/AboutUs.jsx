import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

export default function AboutUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Playfair+Display:wght@600&display=swap');

        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
          background: linear-gradient(to bottom right, #f4f7fc, #eef1f6);
        }

        .about-container {
          max-width: 1000px;
          margin: 120px auto 60px;
          padding: 40px 30px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.08);
        }

        .about-title {
          font-family: 'Playfair Display', serif;
          font-size: 2.8rem;
          text-align: center;
          color: #2b3d66;
          margin-bottom: 30px;
        }

        .about-heading {
          font-size: 1.7rem;
          color: #4a2c8c;
          margin-top: 35px;
        }

        .about-subheading {
          font-size: 1.3rem;
          font-weight: 600;
          margin-top: 30px;
          color: #444;
        }

        .about-paragraph {
          font-size: 1.05rem;
          color: #555;
          margin-bottom: 16px;
          line-height: 1.75;
        }

        .about-list {
          list-style-type: none;
          padding-left: 0;
          margin-top: 15px;
        }

        .about-list li {
          padding: 6px 0;
          font-size: 1rem;
          color: #3a3a3a;
        }

        .bold {
          font-weight: bold;
          color: #2a2a2a;
        }

        .tagline {
          font-style: italic;
          font-size: 1.1rem;
          text-align: center;
          color: #0077aa;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }

          .about-heading {
            font-size: 1.4rem;
          }

          .about-paragraph,
          .about-list li {
            font-size: 0.95rem;
          }
        }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1 }}>
          <motion.div
            className="about-container"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 className="about-title" whileHover={{ scale: 1.02 }}>
              Larissa – The Greece Gateway in Nashik
            </motion.h1>

            <h2 className="about-heading">Brand Story</h2>
            <p className="about-paragraph">In the heart of Nashik’s wine valley, where nature whispers and sunsets paint golden dreams, emerges a resort like no other — Larissa.</p>
            <p className="about-paragraph">Named after the ancient city of Greece, Larissa is a tribute to Mediterranean charm and the soulful Greek way of life.</p>
            <p className="about-paragraph">Designed as a villa concept resort with only ten exclusive suites, each corner of Larissa reflects timeless Grecian aesthetics.</p>
            <p className="about-paragraph">Larissa is not just a destination; it’s a feeling. A quiet, luxurious escape where every element — from architecture to cuisine — is curated to transport you to the Aegean isles.</p>
            <p className="about-paragraph">Each villa is named after a legendary river from Greek mythology, drawing inspiration from their rich symbolism and mystique.</p>
            <p className="about-paragraph">Whether you're celebrating a special moment, seeking creative solitude, or simply unwinding under the Nashik sky, Larissa invites you to step into a story that blends myth with luxury.</p>

            <h3 className="about-subheading">Room Names and Symbolism</h3>
            <ul className="about-list">
              <li><span className="bold">Acheloos – </span>Abundance and strength.</li>
              <li><span className="bold">Alpheios – </span>Flowed beneath the sea for love.</li>
              <li><span className="bold">Eurotas – </span>Spartan resilience and discipline.</li>
              <li><span className="bold">Acheron – </span>River of Woe, transformation.</li>
              <li><span className="bold">Peneios – </span>Grace and creativity.</li>
              <li><span className="bold">Ilissos – </span>River of wisdom and art.</li>
              <li><span className="bold">Struma – </span>For wanderers and dreamers.</li>
              <li><span className="bold">Neda – </span>Feminine healing energy.</li>
              <li><span className="bold">Eridanos – </span>Mythic beauty and duality.</li>
            </ul>

            <p className="tagline"><span className="bold">Tagline:</span> “Larissa – The Greece Gateway in Nashik”</p>
          </motion.div>
        </div>
        <Footer />
      </div>
    </>
  );
}
