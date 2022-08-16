import React, { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import { WIP } from "./WIP";
import { ShoppingCart } from "./summary/ShoppingCart";

const icons = "cursor-pointer";

export const NavBar = ({ handleShowCart }) => {
  return (
    <nav className="fixed z-50 backdrop-blur-xl  bg-black/75 w-full h-20 px-20 text-white flex justify-between items-center">
      <h1 className="text-4xl cursor-pointer font-bold">ZENIT.</h1>
      <div>
        <WIP />
      </div>
      <div className="flex  justify-end  w-48 relative after:bg-red-500 after:absolute after:p-[6px] after:rounded-full after:-top-3 after:-right-2">
        <FiShoppingBag className={icons} size={28} onClick={handleShowCart} />
      </div>
    </nav>
  );
};
