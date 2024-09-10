import React, { useEffect } from "react";
import Slider from "react-slick";
import coinInventory from "../../../assets/mockData";
import { NextArrow, PrevArrow } from "./CustomArrows";

// Import custom CSS if needed
import "./Carousel.css"; // Optional for custom styling

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // JavaScript to equalize the height of all items
  useEffect(() => {
    const items = document.querySelectorAll(".coin-slide");
    let maxHeight = 0;

    // Find the maximum height of all items
    items.forEach((item) => {
      const itemHeight = item.offsetHeight;
      if (itemHeight > maxHeight) {
        maxHeight = itemHeight;
      }
    });

    // Set all items to the maximum height
    items.forEach((item) => {
      item.style.height = `${maxHeight}px`;
    });
  }, []);

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {coinInventory.map((coin) => (
          <div key={coin.id} className="coin-slide">
            <h2>
              {coin.name} ({coin.year})
            </h2>
            <p>
              <strong>Country:</strong> {coin.country}
            </p>
            <p>
              <strong>Metal:</strong> {coin.metal}
            </p>
            <p>
              <strong>Weight:</strong> {coin.weight}
            </p>
            <p className="price">
              <strong>Price:</strong> ${coin.price.toFixed(2)}
            </p>
            <p>
              <strong>Stock:</strong> {coin.stock}
            </p>
            <p>{coin.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
