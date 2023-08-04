import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cartitems = () => {
  return (
    <>
    <div className=" flex py-4 border-b ">


      {/*for image */}
      <div className="aspect-square w-[50px] md:w-[80px]">
        <img src="/art5.webp" alt="" />
      </div>
      {/*for image */}

{/*Product name */}

<div className="flex flex-col md:flex-row pr-[10.5rem]">
<div className="ml-5 flex flex-col ">
<div className="text-lg">IronMan Portrait</div>
<div className="text-black/[0.4]">subtitle for more info</div>
<div className="flex items-center justify-between mt-4 ">
<div className=" text-black/[0.5] gap-1">Frame color</div>
<select className="hover:text-black">
  <option value="0"></option>
  <option value="1">Black</option>
  <option value="1">White</option>
  <option value="1">Golden</option>
  <option value="1">Silver</option>
</select>
</div>
</div>
</div>

<div className="flex flex-col gap-[1.5rem]">
<div className="text-black/[0.5]">NRS.8000</div>
<div className=""><RiDeleteBin6Line /></div>
</div>
</div>

</>
  );
};

export default Cartitems;
