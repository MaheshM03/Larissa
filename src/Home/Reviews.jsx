import React, { useState } from 'react';
import Footer from './Footer';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

export default function Reviews() {
  const [reviews] = useState([
    {
      type: 'Resort',
      name: 'Aarav Sharma',
      review: 'The stay was absolutely stunning! Great amenities and views.',
      rating: 4.8
    },
    {
      type: 'Villa',
      name: 'Riya Kapoor',
      review: 'Private pool and peaceful atmosphere made our weekend perfect!',
      rating: 4.9
    },
    {
      type: 'Resort',
      name: 'Sneha Joshi',
      review: 'Loved the spa and the food. Will visit again soon!',
      rating: 4.6
    },
    {
      type: 'Villa',
      name: 'Kabir Mehta',
      review: 'Spacious and luxurious. Felt like a 5-star experience!',
      rating: 5.0
    }
  ]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        .review-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          font-family: 'Open Sans', sans-serif;
          background-color: #f4f1ec;
        }

        .review-content {
          flex: 1;
          padding: 100px 20px 60px;
          max-width: 1200px;
          margin: auto;
        }

        .review-title {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #3c2f2f;
        }

        .review-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
        }

        @media (max-width: 768px) {
          .review-grid {
            grid-template-columns: 1fr;
          }
        }

        .review-card {
          background-color: #fff;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .review-type {
          font-size: 0.95rem;
          font-weight: 600;
          color: #a1724e;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .review-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #2c2c2c;
          margin-bottom: 8px;
        }

        .review-text {
          font-style: italic;
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 12px;
        }

        .review-rating {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: bold;
          color: #e0a800;
        }
      `}</style>

      <div className="review-wrapper">
        <div className="review-content">
          <h1 className="review-title">Guest Reviews</h1>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <motion.div
                className="review-card"
                key={index}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="review-type">{review.type} Review</div>
                <div className="review-name">{review.name}</div>
                <div className="review-text">“{review.review}”</div>
                <div className="review-rating">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {review.rating % 1 !== 0 && <FaStar style={{ opacity: 0.5 }} />} ⭐ {review.rating} / 5
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
