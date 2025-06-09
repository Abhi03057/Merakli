import React from 'react';
import './Ads.css';

function Ads() {
  return (
    <div className="ads-wrapper">
      <h2 className="ads-heading">Some of Our Brands</h2>
      <div className="ads-container">
        <img
          src="https://www.befashionable.in/wp-content/uploads/2022/09/Renee-banner-scaled.jpg"
          alt="Ad 1"
          className="ad-image"
        />
        <img
          src="https://www.fashiongonerogue.com/wp-content/uploads/2016/06/Dior-Fall-Winter-2016-Campaign02.jpg"
          alt="Ad 2"
          className="ad-image"
        />
        <img
          src="https://i.pinimg.com/originals/db/72/f0/db72f0ea561d6b1f344a5de36d469721.jpg"
          alt="Ad 3"
          className="ad-image"
        />
        <img
          src="https://assets-global.website-files.com/630d4d1c4a462569dd189855/65a06015ab7f022f4ea65773_1.webp"
          alt="Ad 4"
          className="ad-image"
        />
      </div>
    </div>
  );
}

export default Ads;
