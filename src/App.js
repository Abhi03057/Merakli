// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Slider from './Homepage/Slider/Slider';
import Categories from './Homepage/Categories/Categories';
import Offer from './Homepage/Offer/Offer';
import Offer2 from './Homepage/Offer2/Offer2';

function App() {
  return (
    <div>
      <Navbar />
      <Categories></Categories>
      <Slider />
      <Offer></Offer>
      <Offer2></Offer2>
      
    </div>
  );
}

export default App;
