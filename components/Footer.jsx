import React from "react";

const Footer = () => {

  return (
<div className="">
  <div className="bg-indigo-900 py-12 ">
    <div className="grid grid-cols-4 px-2 justify-between container mx-auto text-white ">
    <h2 className="">About us</h2>
    <h2 className="">Contact us</h2>
    <div>   
     <h2 className="mb-4">Learn more</h2> 
     <ul className="">
      <li >
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/About">About</a>
      </li>
      <li>
        <a href="/Contact">Contact</a>
      </li>
    </ul>
    </div>
  <div>
ARTVEDIC
<p className="mt-4">
  A common platform for artists
</p>
  </div>

    </div>
    </div>
  </div>
  );
};

export default Footer;
