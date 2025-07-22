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
      padding: '50px 20px 40px',
      flex: 1
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.4rem',
      textAlign: 'center',
      color: '#3c2a21',
      marginBottom: '40px',
      marginTop:'60px'
    },
    tabs: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '40px',
      flexWrap: 'wrap',
      gap: '20px'
    },
    tabButton: (active) => ({
      padding: '12px 28px',
      borderRadius: '30px',
      border: '2px solid #b08968',
      fontSize: '1rem',
      cursor: 'pointer',
      backgroundColor: active ? '#b08968' : 'transparent',
      color: active ? '#fff' : '#3c2a21',
      fontWeight: 'bold',
      transition: 'all 0.3s ease'
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
      gap: '24px',
      justifyContent: 'center',
      alignItems: 'center'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: '16px',
      padding: '24px',
      textAlign: 'center',
      boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    icon: {
      fontSize: '2.2rem',
      marginBottom: '12px'
    },
    name: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#5e5e5e'
    }
  };

  const renderAmenities = (amenities) =>
    amenities.map((item, index) => (
      <div
        className="amenity-card"
        key={index}
        data-aos="fade-up"
        style={styles.card}
      >
        <div style={styles.icon}>{item.icon}</div>
        <div style={styles.name}>{item.name}</div>
      </div>
    ));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Open+Sans&display=swap');

        .amenity-card:hover {
          transform: scale(1.05);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
        }

        @media (max-width: 480px) {
          .amenity-card {
            padding: 20px;
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
