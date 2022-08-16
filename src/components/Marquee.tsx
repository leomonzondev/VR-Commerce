import React from "react";

export const Marquee = () => {
  const words = "EXPLORE NOW  ".repeat(10);
  return (
    <div className="py-20 w-full bg-black overflow-hidden">
      <p className="scrolling text-white font-bold space-x-2 text-6xl whitespace-nowrap tracking-[.50rem]">
        {words}
      </p>
    </div>
  );
};
