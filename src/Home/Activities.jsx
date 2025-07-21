import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function ActivityCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const activities = [
    {
      title: 'Luxury Villa Spa',
      description: 'Relax with premium spa treatments in your villa.',
      image: 'https://plus.unsplash.com/premium_photo-1683134297492-cce5fc6dae31?w=500',
    },
    {
      title: 'Sunset Yoga Sessions',
      description: 'Rejuvenate your soul with sunset yoga by the beach.',
      image: 'https://media.istockphoto.com/id/485387392/photo/warrior-pose-from-yoga.webp?a=1&b=1&s=612x612&w=0&k=20&c=PqZ6j4aiilka8qEq7UUng89WA4koAsAbi6UGvnL8b1k=',
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

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 36px;
          padding: 60px 40px;
          background-color: #f4f1ec;
        }

        .activity-card {
          background: #fff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top:40px;
        }

        .activity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .activity-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .activity-card:hover img {
          transform: scale(1.05);
        }

        .card-content {
          padding: 18px;
        }

        .card-content h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          margin-bottom: 10px;
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
          font-family: 'Open Sans', sans-serif;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .card-content button:hover {
          background: #8c6d4f;
          box-shadow: 0 0 10px rgba(176, 137, 104, 0.4);
        }

        @media (max-width: 480px) {
          .card-content h3 {
            font-size: 1.05rem;
          }

          .card-content p {
            font-size: 0.88rem;
          }

          .card-content button {
            font-size: 0.85rem;
            padding: 8px 16px;
          }
        }
      `}</style>

      <div className="card-grid">
        {activities.map((activity, index) => (
          <div className="activity-card" data-aos="fade-up" key={index}>
            <img src={activity.image} alt={activity.title} />
            <div className="card-content">
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
