import React, { useState, useEffect, useRef } from "react";
import "./Slider.css";

const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/11980ec333f6aa03.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/74f0ad81e44e6e6f.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/a20f7f7de7954f9b.jpeg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/49c336ca72c1dcba.jpg?q=60",
  "https://rukminim2.flixcart.com/fk-p-flap/2020/340/image/4413f6baeb928078.jpeg?q=60"
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      resetTimeout();
    };
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const prevSlide = () => {
    resetTimeout();
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    resetTimeout();
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow left-arrow" onClick={prevSlide} aria-label="Previous Slide">&#10094;</button>

        <img src={images[current]} alt={`Slide ${current + 1}`} className="slider-image" />

        <button className="arrow right-arrow" onClick={nextSlide} aria-label="Next Slide">&#10095;</button>
      </div>
    </div>
  );
}

export default Slider;
