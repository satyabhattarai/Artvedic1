import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const hero = () => {
  return (
    <div className="mx-auto max-w-[1280px]">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        width={"auto"}
      >
        <div>
          <img src="art2.jpeg" className="h-[400px] w-auto" />
        </div>
        <div>
          <img src="art3.jpeg" className="h-[400px] w-auto" />
        </div>
        <div>
          <img src="art4.jpeg" className="h-[400px] w-auto" />
        </div>
      </Carousel>
    </div>
  );
};

export default hero;
