import Link from "next/link";
import React from "react";

const Productcard = () => {
  return (
    <Link
      href="/product/1"
      className=" block border border-gray-200 overflow-hidden  shadow
      rounded-lg transform bg-white duration-200 
      hover:scale-105 cursor-pointer"
    >
      <img
        className="h-[250px] w-full object-cover "
        src="/land3.jpeg"
        alt="Prod image"
      />

      <div className="p-4 text-black">
        <h2 className="text-lg font-medium">Product Name</h2>

        <div className="flex  items-center text-black/[0.5]">
          <p className="mr-2  text-lg">200</p>
          <p className="mr-2 text-md line-through">250</p>
          <p className="ml-auto text-base text-green-500">20% off</p>
        </div>
      </div>
    </Link>
  );
};

export default Productcard;
