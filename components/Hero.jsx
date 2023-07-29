import React from "react";

import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/land1.jpeg"
    onDragStart={handleDragStart}
    role="presentation"
    className="mx-auto"
  />,
  <img
    src="/art3.jpeg"
    onDragStart={handleDragStart}
    role="presentation"
    className="mx-auto"
  />,
  <img
    src="/art4.jpeg"
    onDragStart={handleDragStart}
    role="presentation"
    className="mx-auto"
  />,
];

const hero = () => {
  return (
    <div className="mx-auto max-w-[1280px] p-4" id="home-carousel">
      <AliceCarousel
        mouseTracking
        items={items}
        infinite
        disableButtonsControls
        disableDotsControls
        autoPlay
        autoPlayInterval={4000}
      />
    </div>
  );
};

export default hero;
