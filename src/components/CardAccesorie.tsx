import Image, { StaticImageData } from "next/image";
import React from "react";
import logo from "../assets/images/auriculares.png";
type AccesorieProps = {
  title: string;
  description: string;
  price: number;
  img: StaticImageData;
  children: any;
};

export const CardAccesorie = ({
  title = "titulo",
  description = "description",
  price = 44,
  img = logo,
  children,
}: AccesorieProps) => {
  return (
    <section className="w-[20rem] h-[35rem]  py-6 px-7 justify-between flex flex-col bg-purple-500 bg-gradient-to-b from-[#6e8bef] to-[#ca6eff] rounded-2xl ">
      <article className=" w-full h-[40rem] relative flex justify-center items-center ">
        {children}
      </article>
      <article className="text-white flex flex-col justify-between  h-full pt-10">
        <h1 className="text-4xl font-medium">{title}</h1>
        <p className="font-medium text-lg">{description}</p>
        <div className=" flex justify-between items-center ">
          <h2 className="text-xl font-bold text-white">${price} USD</h2>
          <button className="text-sm font-medium bg-white rounded-full px-8 text-[#567feb] hover:text-[#7399fa] py-2">
            Buy Now
          </button>
        </div>
      </article>
    </section>
  );
};
