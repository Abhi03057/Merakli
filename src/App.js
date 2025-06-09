// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Slider from './Homepage/Slider/Slider';
import Categories from './Homepage/Categories/Categories';
import Offer from './Homepage/Offer/Offer';
import Offer2 from './Homepage/Offer2/Offer2';
import Footer from './Homepage/Footer/Footer';
import Ads from './Homepage/Ads/Ads';
import Cloths from './Clothing/Cloths/Cloths'; // Adjust path if needed

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Categories />
            <Slider />
            <Offer />
            <Ads />
            <Offer2 />
            <Footer />
          </>
        } />
        <Route path="/fashion" element={<Cloths />} />
      </Routes>
    </Router>
  );
}

export default App;
