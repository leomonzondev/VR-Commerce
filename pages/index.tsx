import type { NextPage } from "next";
import React, { useEffect } from "react";
import { Building } from "../src/components/Building";
import { Footer } from "../src/components/Footer";
import { Hero } from "../src/components/Hero";
import { Marcas } from "../src/components/Marcas";
import { Marquee } from "../src/components/Marquee";
import { NavBar } from "../src/components/NavBar";
import { ShopSection } from "../src/components/ShopSection";
import { Video } from "../src/components/Video";
import { VideoJs } from "../src/components/VideoJs";
import videojs from "video.js";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Home: NextPage = () => {
  const refScroll = React.useRef(null);
  let lscroll: any;

  useEffect(() => {
    if (!refScroll.current) return;
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.8,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });

    if (typeof window === "undefined") {
      return;
    }

    return () => lscroll.destroy();
  }, []);

  return (
    <>
      <div data-scroll-container ref={refScroll} className="">
        <Hero />
        <Marquee />
        <ShopSection />
        <VideoJs />
        {/* <Video /> */}
        <Building />
        <Marcas />
        <Footer />
      </div>
    </>
  );
};

export default Home;
