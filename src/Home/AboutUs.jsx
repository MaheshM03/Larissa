import React from 'react';
import Footer from './Footer';

export default function AboutUs() {
  const styles = {
    container: {
      maxWidth: '960px',
      margin: '0 auto',
      padding: '60px 30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.08)',
      fontFamily: "'Open Sans', sans-serif",
      lineHeight: '1.8',
      color: '#3d3d3d',
    },
    title: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '2.5rem',
      textAlign: 'center',
      color: '#2b3d66',
      marginBottom: '40px',
    },
    heading: {
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.75rem',
      marginTop: '40px',
      color: '#4a2c8c',
    },
    subheading: {
      fontSize: '1.4rem',
      marginTop: '30px',
      fontWeight: '600',
      color: '#555',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#555',
      marginBottom: '1.2rem',
    },
    roomList: {
      listStyleType: 'none',
      paddingLeft: '0',
      marginTop: '15px',
    },
    listItem: {
      fontSize: '1rem',
      padding: '6px 0',
      color: '#444',
    },
    spanBold: {
      fontWeight: 'bold',
      color: '#2a2a2a',
    },
    tagline: {
      marginTop: '40px',
      fontStyle: 'italic',
      fontSize: '1.1rem',
      textAlign: 'center',
      color: '#0077aa',
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Playfair+Display:wght@600&display=swap');
        body {
          background-color: #f2f3f7;
          margin: 0;
        }
      `}</style>

      <div style={{ minHeight: '100vh', backgroundColor: '#f2f3f7', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, paddingTop: '100px', paddingBottom: '40px' }}>
          <div style={styles.container}>
            <h1 style={styles.title}>Larissa – The Greece Gateway in Nashik</h1>

            <h2 style={styles.heading}>Brand Story</h2>
            <p style={styles.paragraph}>
              In the heart of Nashik’s wine valley, where nature whispers and sunsets paint golden dreams, emerges a resort like no other — Larissa.
            </p>
            <p style={styles.paragraph}>
              Named after the ancient city of Greece, Larissa is a tribute to Mediterranean charm and the soulful Greek way of life.
            </p>
            <p style={styles.paragraph}>
              Designed as a villa concept resort with only ten exclusive suites, each corner of Larissa reflects timeless Grecian aesthetics.
            </p>
            <p style={styles.paragraph}>
              Larissa is not just a destination; it’s a feeling. A quiet, luxurious escape where every element — from architecture to cuisine — is curated to transport you to the Aegean isles.
            </p>
            <p style={styles.paragraph}>
              Each villa is named after a legendary river from Greek mythology, drawing inspiration from their rich symbolism and mystique.
            </p>
            <p style={styles.paragraph}>
              Whether you're celebrating a special moment, seeking creative solitude, or simply unwinding under the Nashik sky, Larissa invites you to step into a story that blends myth with luxury.
            </p>

            <h3 style={styles.subheading}>Room Names and Symbolism</h3>
            <ul style={styles.roomList}>
              <li style={styles.listItem}><span style={styles.spanBold}>Acheloos – </span>Abundance and strength.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Alpheios – </span>Flowed beneath the sea for love.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Eurotas – </span>Spartan resilience and discipline.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Acheron – </span>River of Woe, transformation.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Peneios – </span>Grace and creativity.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Ilissos – </span>River of wisdom and art.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Struma – </span>For wanderers and dreamers.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Neda – </span>Feminine healing energy.</li>
              <li style={styles.listItem}><span style={styles.spanBold}>Eridanos – </span>Mythic beauty and duality.</li>
            </ul>

            <p style={styles.tagline}>
              <span style={styles.spanBold}>Tagline:</span> “Larissa – The Greece Gateway in Nashik”
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
