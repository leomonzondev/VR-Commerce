import Image from "next/image";
import React from "react";
import girl from "../assets/images/girlvr3.png";

const sizeCircle = "30rem";

export const Hero = () => {
  return (
    <main className=" flex h-screen ">
      <article className=" overflow-hidden w-full scale-[1.08]">
        <div
          className={`h-[56rem] shadow-[0_0_30px_20px_rgba(230,36,216,0.3)]  w-[56rem] rounded-full relative md:-left-16 md:top-32 circle`}
        />
        <div className="absolute top-[13.45rem] md:left-12">
          <Image
            src={girl}
            className={`-scale-x-[1]`}
            width={900}
            height={750}
          />
        </div>
      </article>
      <article className="flex flex-col text-end justify-center items-end w-[70rem] pr-20">
        <h1 className="text-[9rem] leading-[7rem]  font-black text-white text-end  w-full ">
          The <br />{" "}
          <span className="text-[#bf1cce] drop-shadow-[0_0_30px_20px_rgba(230,36,216,0.3)]">
            Omniverse
          </span>
        </h1>
        <p className="text-white text-end pt-7 w-[87%] text-xl font-medium">
          Лорем ипсум долор сит амет, нам сумо пробо ут, магна бландит
          ехпетендис яуо ет, меа ипсум суммо ин. губергрен медиоцритатем нам,
          дуо ут атяуи цонсул, иисяуе еи яуи. Про репудиаре хендрерит
          цонтентионес еи, вис муциус
        </p>
      </article>
    </main>
  );
};
