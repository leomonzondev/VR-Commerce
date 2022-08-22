import Image from "next/image";
import React, { useEffect } from "react";

import headset from "../assets/images/vrheadsettransparency.png";
import gif from "../assets/images/GuBZ.gif";
import flare from "../assets/images/flare.png";
import { CardProduct } from "./CardProduct";
import { CardAccesorie } from "./CardAccesorie";
import { accesories, principal } from "../helpers/data";
import { useAppSelector, useAppDispatch } from "../context/hooks";
import { receivedProducts } from "../context/productsSlice";
import { addToCart } from "../context/cartSlice";

export const ShopSection = () => {
  const products = useAppSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  return (
    <div className="w-full  bg-black pb-20 px-20">
      <div className="relative flex justify-center h-screen">
        <h1 className="text-[18rem] text-white font-black -top-16  absolute">
          OMNIQUEST
        </h1>
        <div className="w-[48rem]  relative -scale-x-[1]">
          <div className="absolute z-20">
            <Image src={headset} className="ml-20" />
          </div>
          <div className="absolute z-30 flicker">
            <Image src={flare} />
          </div>
          <div className="absolute overflow-hidden rounded-full w-[25rem]  z-10 left-52 top-80">
            <Image src={gif} className=" " />
          </div>
        </div>
        <div className="absolute right-0 bottom-0 flex flex-col items-center gap-6 ">
          <p className="text-white text-4xl font-bold">From $299 USD</p>
          <button className="px-12  text-white bg-gradient-to-r  from-[#ca6eff] to-[#6e8bef] hover:from-[#6e8bef] hover:to-[#ca6eff] transition-all duration-300 ease rounded-full text-2xl font-semibold py-4">
            Buy Now
          </button>
        </div>
      </div>

      <div className="pt-20">
        <div className="flex flex-col items-end pb-20">
          <h2 className="font-bold text-6xl  text-white text-end pb-2">
            WHATS INCLUDED
          </h2>
          <button
            onClick={() => console.log(Object.values(products))}
            className="bg-red text-3xl"
          >
            CLICK ME SHOW CONSOLE
          </button>
          <div className="h-2 w-72 rounded-full bg-gradient-to-r from-[#ca6eff] to-[#6e8bef]" />
        </div>
        <div className="h-2 w-full bg-pink" />
        <div className="flex flex-wrap px-20 justify-center gap-8 pb-20">
          <CardProduct {...principal[0]}>
            <Image src={principal[0].img} width={350} height={450} />
          </CardProduct>
          <CardProduct {...principal[1]}>
            <Image src={principal[1].img} width={400} height={250} />
          </CardProduct>
          <CardProduct {...principal[2]}>
            <Image src={principal[2].img} width={250} height={400} />
          </CardProduct>
          <CardProduct {...principal[3]}>
            <Image src={principal[3].img} width={400} height={250} />
          </CardProduct>
        </div>
      </div>

      <div>
        <div>
          <h2 className="font-bold text-6xl text-white text-start">
            ACCESSORIES
          </h2>
          <div className="h-2 w-52 rounded-full bg-gradient-to-r mt-3  from-[#ca6eff] to-[#6e8bef]" />
        </div>
        <div className="flex flex-wrap gap-4 justify-center pt-20">
          <CardAccesorie {...accesories[0]}>
            <Image src={accesories[0].img} width={300} height={60} />
          </CardAccesorie>
          <CardAccesorie {...accesories[1]}>
            <Image src={accesories[1].img} width={120} height={200} />
          </CardAccesorie>
          <CardAccesorie {...accesories[2]}>
            <Image src={accesories[2].img} width={160} height={200} />
          </CardAccesorie>
          <CardAccesorie {...accesories[3]}>
            <Image src={accesories[3].img} width={120} height={200} />
          </CardAccesorie>
        </div>
      </div>
    </div>
  );
};
