import Link from "next/link";
import React from "react";

export const WIP = () => {
  return (
    <>
      <Link href="https://www.leomonzon.dev">
        <div>
          <h1 className="text-4xl font-bold bg-[#f3c619] text-black cursor-pointer">
            WORK IN PROGRESS
          </h1>
        </div>
      </Link>
    </>
  );
};
