import React, { useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';

export default function Gallery() {
  const allImages = [
    {
      src: "https://images.unsplash.com/photo-1751002116776-2f792c396969?w=800&auto=format&fit=crop&q=80",
      category: "Resort",
      caption: "Elegant Lounge Area",
    },
    {
      src: "https://images.unsplash.com/photo-1751002116774-7206b166d95f?w=800&auto=format&fit=crop&q=80",
      category: "Villa",
      caption: "Private Outdoor Villa",
    },
    {
      src: "https://images.unsplash.com/photo-1751002116797-f0f38be377ea?w=800&auto=format&fit=crop&q=80",
      category: "Spa",
      caption: "Luxury Spa Room",
    },
    {
      src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60",
      category: "Villa",
      caption: "Evening Pool View",
    },
    {
      src: "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?w=500&auto=format&fit=crop&q=60",
      category: "Resort",
      caption: "Lobby with Garden View",
    },
    {
      src: "https://images.unsplash.com/photo-1643216120728-fa08e985b178?w=800&auto=format&fit=crop&q=80",
      category: "Spa",
      caption: "Jacuzzi & Wellness",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1724659217647-4bfdba75e5a6?w=800&auto=format&fit=crop&q=80",
      category: "Villa",
      caption: "Sunlit Master Bedroom",
    },
    {
      src: "https://images.unsplash.com/photo-1715817608425-1aac36eb69af?w=800&auto=format&fit=crop&q=80",
      category: "Resort",
      caption: "Breakfast by the Pool",
    },
  ];

  const [filter, setFilter] = useState("All");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ["All", "Resort", "Villa", "Spa"];

  const filteredImages = filter === "All"
    ? allImages
    : allImages.filter((img) => img.category === filter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        body {
          overflow-x: hidden;
        }

        .page-wrapper {
          font-family: 'Open Sans', sans-serif;
          background-color: #f4f1ec;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .gallery-container {
          flex: 1;
          padding: 60px 20px 40px;
          max-width: 100%;
          margin: auto;
        }

        .gallery-title {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin: 60px 0 20px;
          color: #3d2e2e;
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }

        .filter-buttons button {
          background: none;
          border: 1px solid #ccc;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .filter-buttons button:hover,
        .filter-buttons button.active {
          background-color: #b08968;
          color: #fff;
          border-color: #b08968;
        }

        .horizontal-scroll {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          padding-bottom: 20px;
          justify-content: center;
        }

        .gallery-item {
          width: 300px;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-5px);
        }

        .gallery-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 14px;
          border-top-right-radius: 14px;
        }

        .caption {
          padding: 12px;
          font-size: 0.9rem;
          text-align: center;
          color: #555;
        }

        .lightbox {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .lightbox img {
          max-width: 90%;
          max-height: 80%;
          border-radius: 12px;
        }

        .lightbox:after {
          content: '×';
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 40px;
          color: white;
          cursor: pointer;
        }

        @media (max-width: 480px) {
          .gallery-title {
            font-size: 1.8rem;
          }
          .gallery-item {
            width: 240px;
          }
        }
      `}</style>

      <div className="page-wrapper">
        <div className="gallery-container">
          <h2 className="gallery-title">La Galerie</h2>

          {/* Filter Buttons */}
          <div className="filter-buttons">
            {categories.map((cat) => (
              <button
                key={cat}
                className={filter === cat ? 'active' : ''}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="horizontal-scroll">
            {filteredImages.map((img, idx) => (
              <motion.div
                className="gallery-item"
                key={idx}
                onClick={() => setLightboxImage(img.src)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <img src={img.src} alt={img.caption} className="gallery-img" />
                <div className="caption">{img.caption}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox View */}
        {lightboxImage && (
          <div className="lightbox" onClick={() => setLightboxImage(null)}>
            <img src={lightboxImage} alt="Preview" />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
