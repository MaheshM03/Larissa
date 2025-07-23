import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './Home/Navbar';
import Home from './Home/Home';
import Gallery from './Home/Gallery';
import ContactUs from './Home/ContactUs';
import BookingForm from './Home/BookingForm';
import Activities from './Home/Activities';
import Footer from './Home/Footer';
import Reviews from './Home/Reviews';
import Amenities from './Home/Aminities';
import AboutUs from './Home/AboutUs';

// ScrollToTop component inside App file
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/amenities" element={<Amenities />} />
      </Routes>
    </Router>
  );
}

export default App;
