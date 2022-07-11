import type { NextPage } from 'next'
import React, { useEffect } from 'react'
import { Hero } from '../src/components/Hero'
import { Marquee } from '../src/components/Marquee'
import { NavBar } from '../src/components/NavBar'
import { ShopSection } from '../src/components/ShopSection';

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
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0;
      lscroll.update();
    });
  },[])


  return (
    <>
    <div data-scroll-container ref={refScroll}>
      <Hero />
      <Marquee />
      <ShopSection />

    </div>
    </>
  )
}

export default Home
