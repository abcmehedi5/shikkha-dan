import React, { useState } from "react";
import "./Slider.css"; 
import { FcNext, FcPrevious } from "react-icons/fc";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div
        className="slider-content"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="slider-item">
            <img src={item.image} alt={item.alt} />
          </div>
        ))}
      </div>

      <div className="pagination">
        {items.map((_, index) => (
          <span
            key={index}
            className={`pagination-dot ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <button className="prev-button" onClick={goToPrevSlide}>
        <FcPrevious />
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        <FcNext />
      </button>
    </div>
  );
};

export default Slider;
