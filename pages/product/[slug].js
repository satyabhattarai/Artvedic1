import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {HiMiniPaintBrush} from "react-icons/hi2";
import {GiWoodFrame} from "react-icons/gi";
import {TbTruckDelivery} from "react-icons/tb";
import RelatedProduct from "@/components/RelatedProduct";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img
    src="/art4.jpeg"
    onDragStart={handleDragStart}
    className="mx-auto object-contain"
  />,

  <img src="/art4.jpeg" onDragStart={handleDragStart} className="mx-auto" />,

  <img src="/art4.jpeg" onDragStart={handleDragStart} className="mx-auto" />,

  <img src="/art4.jpeg" onDragStart={handleDragStart} className="mx-auto" />,
];

const productdetails = () => {
  return (
    <div>
    <div
      className="mx-auto max-w-[1280px] p-4 grid grid-cols-2 gap-4"
      id="product-carousel"
    >
      <AliceCarousel
        mouseTracking
        items={items}
        disableButtonsControls
        renderDotsItem={(e) => {
          return (
            <div className="alice-carousel-dot-item">
              {items[e.activeIndex]}
            </div>
          );
        }}
      />
      <div>
        <div className="text-[34px] font-semibold">IronMan Portrait</div>  
        <div className="text-lg font-semibold mb-12">&#8360; 8000</div>
        <div className="  font-semibold mb-4  ">Description:   </div>

        <div className="bg-slate-200">
          <div className="py-4 px-4 ">
        <div className="flex gap-4 justify-content items-center mb-2">
          <HiMiniPaintBrush className="ml-2" />Made with charcoal</div>
        <div className="flex items-center justify-content gap-4 mb-2 "> 
          <GiWoodFrame className="ml-2" />With Wooden Frame
        </div>
        <div className="flex items-center justify-content gap-4 ">
          <TbTruckDelivery className="ml-2" />Will be delivered within a week
        </div>
        </div>
        </div>

        <button className="bg-amber-300 w-80 h-12 rounded-full mt-32
         mb-4  hover:bg-amber-400 duration-300 hover:-translate-y-1"> AddtoCart
       </button>
       <button className="bg-black w-80 h-12 rounded-full text-white duration-300 hover:bg-zinc-900 hover:translate-y-1 "> BuyNow
       </button>
      

      </div>
    </div>
    <RelatedProduct/>
    </div>
  );
};

export default productdetails;
