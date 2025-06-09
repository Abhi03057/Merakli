// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Slider from './Homepage/Slider/Slider';
import Categories from './Homepage/Categories/Categories';
import Offer from './Homepage/Offer/Offer';
import Offer2 from './Homepage/Offer2/Offer2';
import Footer from './Homepage/Footer/Footer';
import Ads from './Homepage/Ads/Ads';

function App() {
  return (
    <div>
      <Navbar />
      <Categories></Categories>
      <Slider />
      <Offer></Offer>
      <Ads></Ads>
      <Offer2></Offer2>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
