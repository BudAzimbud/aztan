import React, { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Logo from "../../assets/images/app-image.png";

import "./index.scss";

const Carousel = ({ children }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const data = [Logo, Logo, Logo, Logo, Logo];

  const handleSlideRightCarousel = () => {
    if (carouselIndex === data.length - 1) {
      return setCarouselIndex(0);
    }
    return setCarouselIndex(carouselIndex + 1);
  };
  const handleSlideLeftCarousel = () => {
    if (carouselIndex === 0) {
      return setCarouselIndex(data.length - 1);
    }
    return setCarouselIndex(carouselIndex - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSlideRightCarousel();
    }, 3000);
    return () => clearInterval(interval);
  });

  console.log(carouselIndex, "index");
  return (
    <div className="carousel">
      <div className="container-item">
        {data.map((item, index) => (
          <img
            className="carousel-item"
            alt="item"
            src={item}
            key={index}
            style={{ transform: `translate(-${carouselIndex * 100}%)` }}
          />
        ))}
      </div>
      <button
        className="btn-carousel-left btn-carousel"
        onClick={handleSlideLeftCarousel}
      >
        <AiOutlineLeft />
      </button>
      <button
        className="btn-carousel-right btn-carousel"
        onClick={handleSlideRightCarousel}
      >
        <AiOutlineRight />
      </button>

      <div className="container-status">
        {data.map((item, index) => (
          <div
            onClick={() => setCarouselIndex(index)}
            className={`status-carousel ${
              index === carouselIndex ? "active" : "inactive"
            }`}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
