import Image from "next/image";
import React from "react";

import img from "../../assets/images/auriculares.png";
import { ImCross } from "react-icons/im";

export const SummaryProduct = () => {
  return (
    <div className="flex gap-5 border-b-[1px] border-white py-4 ">
      <picture className="relative w-56  h-52 rounded-2xl bg-purple-500 bg-gradient-to-b from-[#6e8bef] to-[#ca6eff]">
        <Image src={img} layout="fill" objectFit="contain" />
      </picture>
      <div className="flex w-full flex-col justify-between">
        <div className="">
          <div className="flex w-full items-center justify-between  ">
            <h2 className="text-4xl font-medium">Auriculares blablabla</h2>
            <ImCross className="cursor-pointer" />
          </div>
          <p className="text-2xl">Quantity 1</p>
        </div>
        <p className="text-3xl font-medium">$2345</p>
      </div>
    </div>
  );
};
