import Link from "next/link";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center z-20 sticky top-0 transition-transform duration-300 `}
    >
      {/* For logo */}
      <Link href="/">
        <img src="/art2.jpeg" className="w-[48px]" />
      </Link>

      {/* For menu */}

      <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />


    <div className=" flex items-center gap-4 ">
     <AiOutlineSearch className="cursor-pointer"/>
      <AiOutlineShoppingCart className=" cursor-pointer mr-12"/>

    </div>
    
    </header>
  );
};

export default Header;
