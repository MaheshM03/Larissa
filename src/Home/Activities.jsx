import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

export default function ActivityCards() {
  const activities = [
    {
      title: 'Luxury Villa Spa',
      description: 'Relax with premium spa treatments in your villa.',
      image: 'https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?w=500',
    },
    {
      title: 'Wine Tasting Tour',
      description: 'Enjoy the taste of Nashik’s finest wines.',
      image: 'https://images.unsplash.com/photo-1592931255321-0d5c35839e22?w=500',
    },
    {
      title: 'Bonfire & Live Music',
      description: 'Enjoy live music around a cozy bonfire night.',
      image: 'https://plus.unsplash.com/premium_photo-1664302233298-793fb5994174?w=500',
    },
    {
      title: 'Cycling Through Vineyards',
      description: 'Ride through lush vineyards and scenic landscapes.',
      image: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500',
    },
    {
      title: 'Infinity Pool Relaxation',
      description: 'Dip into our stunning infinity pool with a valley view.',
      image: 'https://images.unsplash.com/photo-1530462567120-3e3d48284bd1?w=500',
    },
    {
      title: 'Kids Adventure Zone',
      description: 'Fun-filled activities and games for the little ones.',
      image: 'https://images.unsplash.com/photo-1746811988821-1bf3dc6eab3a?w=500',
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        .section-title {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.4rem;
          margin-top: 100px;
          margin-bottom: 30px;
          color: #3c2a21;
          padding: 0 20px;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          padding: 0 20px 60px;
          background-color: white;
        }

        .activity-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .activity-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
        }

        .activity-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
        }

        .card-content {
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          flex-grow: 1;
        }

        .card-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin-bottom: 8px;
          color: #3d2e2e;
        }

        .card-content p {
          font-family: 'Open Sans', sans-serif;
          font-size: 0.95rem;
          color: #5e5e5e;
          margin-bottom: 16px;
        }

        .card-content button {
          background: #b08968;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          cursor: pointer;
          align-self: flex-start;
          transition: background 0.3s ease;
        }

        .card-content button:hover {
          background: #8c6d4f;
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.8rem;
            margin-top: 90px;
          }

          .card-content p {
            font-size: 0.9rem;
          }

          .card-content button {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        La Galerie des Activités
      </motion.h2>

      <div className="card-grid">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            className="activity-card"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img src={activity.image} alt={activity.title} />
            <div className="card-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button>Book Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </>
  );
}
