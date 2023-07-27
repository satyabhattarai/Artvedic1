import Link from "next/link";
import React from "react";

const Productcard = () => {
  return (
   
      <Link href="/product/1" className="transform overflow:hidden bg-white duration-200 hover:scale-105 cursor-pointer  ">
        <img className="w-full" src="art5.webp" alt="Prod image" />
      <div className="p-4 text-black">
        <h2 className="text-lg font-medium">Product Name</h2>
        <div className="flex  items-center text-black/[0.5]">
        <p className="mr-2  text-lg font-semibold">200</p>
        <p className="mr-2 text-md font-medium line-through">250</p>
        <p className="ml-auto text-base font-medium  text-green-500">20% off</p>
      </div>
      </div>
      </Link>
    
  );
};

export default Productcard;
