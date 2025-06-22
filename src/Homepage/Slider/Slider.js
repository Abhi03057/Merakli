import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

import watch from "./watch.png";
import mattress from "./mattress.png";
import s25 from "./s25.png";
import macbook from "./macbook.png";
import sundress from "./sundress.png";

const images = [watch, mattress, s25, sundress, macbook];

function Slider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <div className="slider-section">
      <h2 className="slider-heading"> Only at <span>Merakli</span> – Hottest Picks!</h2>
      <div className="slider-row">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slider-card ${index === current ? "active" : ""}`}
            style={{ '--card-index': index }}
          >
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Slider;
