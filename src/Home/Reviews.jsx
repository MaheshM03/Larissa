import React, { useState } from 'react';
import Footer from './Footer';

export default function Reviews() {
  const [reviews, setReviews] = useState([
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

  const [newReview, setNewReview] = useState({
    type: 'Resort',
    name: '',
    review: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingNum = parseFloat(newReview.rating);
    if (!newReview.name || !newReview.review || isNaN(ratingNum)) {
      alert("Please fill in all fields with valid values.");
      return;
    }
    setReviews(prev => [...prev, { ...newReview, rating: ratingNum }]);
    setNewReview({ type: 'Resort', name: '', review: '', rating: '' });
  };

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
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .review-card {
          background-color: #fff;
          border-radius: 14px;
          padding: 24px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .review-card:hover {
          transform: translateY(-5px);
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
          font-weight: bold;
          color: #e0a800;
        }

        .review-form {
          margin-top: 50px;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
        }

        .review-form h3 {
          text-align: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #4b2e83;
        }

        .review-form input,
        .review-form select,
        .review-form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 15px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 0.95rem;
          font-family: inherit;
        }

        .review-form button {
          width: 100%;
          padding: 12px;
          background-color: #4b2e83;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .review-form button:hover {
          background-color: #361c66;
        }
      `}</style>

      <div className="review-wrapper">
        <div className="review-content">
          <h1 className="review-title">Guest Reviews</h1>

          <div className="review-grid">
            {reviews.map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-type">{review.type} Review</div>
                <div className="review-name">{review.name}</div>
                <div className="review-text">“{review.review}”</div>
                <div className="review-rating">⭐ {review.rating} / 5</div>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <form className="review-form" onSubmit={handleSubmit}>
            <h3>Share Your Experience</h3>
            <select name="type" value={newReview.type} onChange={handleChange}>
              <option value="Resort">Resort</option>
              <option value="Villa">Villa</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={newReview.name}
              onChange={handleChange}
            />
            <textarea
              name="review"
              placeholder="Write your review..."
              value={newReview.review}
              onChange={handleChange}
              rows="4"
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (0-5)"
              step="0.1"
              max="5"
              min="0"
              value={newReview.rating}
              onChange={handleChange}
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>

        <Footer />
      </div>
    </>
  );
}
