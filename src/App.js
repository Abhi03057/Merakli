// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Slider from './Homepage/Slider/Slider';
import Categories from './Homepage/Categories/Categories';

function App() {
  return (
    <div>
      <Navbar />
      <Categories></Categories>
      <Slider />
      
    </div>
  );
}

export default App;
