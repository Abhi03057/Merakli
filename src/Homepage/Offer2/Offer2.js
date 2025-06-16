// src/Homepage/Offer2/Offer2.js
import React from 'react';
import './Offer2.css';

import Travel from './Travel.png';
import Earphones from './Earphones.webp';
import Watch from './watch.webp';

import Soundbar from './Soundbar.png';
import Laptop from './Laptop.png';
import ManyMore from './manyMore.png';

function Offer2() {
  return (
    <div className="offer2-wrapper">
      <div className="offer2-container">
        <h2 className="offer2-heading">Offers you can't refuse</h2>
        <div className="offer2-images">
          <img src={Travel} alt="Travel" className="offer-image" />
          <img src={Earphones} alt="Earphones" className="offer-image" />
          <img src={Watch} alt="Watch" className="offer-image" />

          {/* Replaced with new local images */}
          <img src={Soundbar} alt="Soundbar" className="offer-image" />
          <img src={Laptop} alt="Laptop" className="offer-image" />
          <img src={ManyMore} alt="And many more" className="offer-image" />
        </div>
      </div>
    </div>
  );
}

export default Offer2;
