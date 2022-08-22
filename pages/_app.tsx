import type { AppProps } from "next/app";
import { useState } from "react";
import { NavBar } from "../src/components/NavBar";
import { ShoppingCart } from "../src/components/summary/ShoppingCart";
import { Provider } from "react-redux";

import "../styles/output.css";
import { store } from "../src/context/Store";

function MyApp({ Component, pageProps }: AppProps) {
  const [visibleCart, setVisibleCart] = useState(false);

  const handleShowCart = () => {
    setVisibleCart(!visibleCart);
  };

  return (
    <div className=" overflow-hidden w-screen h-screen">
      <Provider store={store}>
        <NavBar handleShowCart={handleShowCart} />

        {visibleCart && (
          <div className="fixed right-0 flex justify-end z-50 backdrop-blur-lg bg-black/60 h-screen w-screen">
            <ShoppingCart handleShowCart={handleShowCart} />
          </div>
        )}

        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
