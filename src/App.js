import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Home/Navbar';
import Home from './Home/Home';

import AboutUs from './Home/AboutUs';
import Gallery from './Home/Gallery';
import ContactUs from './Home/ContactUs';
import BookingForm from './Home/BookingForm';
import Activities from './Home/Activities';
import Footer from './Home/Footer';
import Reviews from './Home/Reviews';
import Amenities from './Home/Aminities';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
         <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<ContactUs />} />
               <Route path="/book" element={<BookingForm />} />
               <Route path='/footer' element={<Footer/>}/>
               <Route path="/reviews" element={<Reviews />} />
               <Route path="/amenities" element={<Amenities />} />
         {/* 
     
        
       
      
        <Route path="/menu" element={<Menu />} />
         */}
      </Routes>
    </Router>
  );
}

export default App;
