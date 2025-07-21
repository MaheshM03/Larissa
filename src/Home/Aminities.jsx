import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

export default function Amenities() {
  const [activeTab, setActiveTab] = useState('resort');

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const resortAmenities = [
    { name: 'Infinity Pool', icon: '🏊‍♂️' },
    { name: 'Spa & Wellness Center', icon: '💆‍♀️' },
    { name: 'Multi-cuisine Restaurant', icon: '🍽️' },
    { name: 'Fitness Center', icon: '🏋️‍♂️' },
    { name: 'Kids Play Area', icon: '🧸' },
    { name: 'Banquet Hall', icon: '🏛️' },
    { name: '24/7 Room Service', icon: '🛎️' },
    { name: 'Free Wi-Fi', icon: '📶' }
  ];

  const villaAmenities = [
    { name: 'Private Pool', icon: '🏖️' },
    { name: 'Fully Equipped Kitchen', icon: '🍳' },
    { name: 'Garden Area', icon: '🌳' },
    { name: 'Jacuzzi', icon: '🛁' },
    { name: 'Personal Butler', icon: '🧑‍🍳' },
    { name: 'BBQ Setup', icon: '🍖' },
    { name: 'Private Parking', icon: '🚗' },
    { name: 'Smart Home Features', icon: '🏠' }
  ];

  const styles = {
    page: {
      fontFamily: "'Open Sans', sans-serif",
      backgroundColor: '#f4f1ec',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      flex: 1,
      marginTop:'20px',
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2rem',
      textAlign: 'center',
      color: '#3d2e2e',
      marginBottom: '30px'
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      gap: '20px'
    },
    tabButton: (active) => ({
      padding: '10px 20px',
      borderRadius: '20px',
      border: 'none',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: active ? '#b08968' : '#e0dcd7',
      color: active ? '#fff' : '#333',
      transition: 'all 0.3s ease'
    }),
    grid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
      marginBottom: '60px'
    },
    card: {
      width: '160px',
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    cardHover: {
      transform: 'translateY(-6px)',
      boxShadow: '0 14px 28px rgba(0, 0, 0, 0.12)'
    },
    icon: {
      fontSize: '2rem',
      marginBottom: '10px'
    },
    name: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#555'
    },
    '@media(max-width: 480px)': {
      card: { width: '100%', maxWidth: '300px' }
    }
  };

  const renderAmenities = (amenities) =>
    amenities.map((item, index) => (
      <div className="amenity-card" key={index} data-aos="fade-up" style={styles.card}>
        <div style={styles.icon}>{item.icon}</div>
        <div style={styles.name}>{item.name}</div>
      </div>
    ));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        .amenity-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
        }

        @media (max-width: 480px) {
          .amenity-card {
            width: 100% !important;
            max-width: 300px !important;
          }
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Amenities</h2>

          <div style={styles.tabs}>
            <button
              style={styles.tabButton(activeTab === 'resort')}
              onClick={() => setActiveTab('resort')}
            >
              Resort Amenities
            </button>
            <button
              style={styles.tabButton(activeTab === 'villa')}
              onClick={() => setActiveTab('villa')}
            >
              Villa Amenities
            </button>
          </div>

          <div style={styles.grid}>
            {activeTab === 'resort'
              ? renderAmenities(resortAmenities)
              : renderAmenities(villaAmenities)}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
