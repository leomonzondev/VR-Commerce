import type { AppProps } from "next/app";
import { useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { ShoppingCart } from "../src/components/summary/ShoppingCart";

import "../styles/output.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [visibleCart, setVisibleCart] = useState(false);

  const handleShowCart = () => {
    setVisibleCart(!visibleCart);
  };

  return (
    <div className=" overflow-hidden w-screen h-screen">
      <NavBar handleShowCart={handleShowCart} />

      {visibleCart && (
        <div className="fixed right-0 flex justify-end z-50 backdrop-blur-lg bg-black/60 h-screen w-screen">
          <ShoppingCart handleShowCart={handleShowCart} />
        </div>
      )}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
