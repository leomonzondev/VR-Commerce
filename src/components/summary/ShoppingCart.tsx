import React, { useEffect } from "react";
import { SummaryProduct } from "./SummaryProduct";
import { IoIosArrowDown } from "react-icons/io";

type summaryProps = {
  handleShowCart: () => void;
};

export const ShoppingCart = ({ handleShowCart }: summaryProps) => {
  return (
    <div className="w-[50rem] h-full bg-black border text-white px-10 py-5">
      <p
        onClick={handleShowCart}
        className="text-end font-bold text-3xl cursor-pointer"
      >
        CLOSE
      </p>
      <h1 className="uppercase font-bold text-6xl pb-10">Order summary</h1>
      <div className="overflow-y-auto h-[60vh]">
        <SummaryProduct />
        <SummaryProduct />
      </div>
      <div className="w-full flex items-center border-b-[1px] py-4 justify-between">
        <h2 className="font-medium text-2xl ">Have a Voucher?</h2>
        <IoIosArrowDown />
      </div>

      <div>
        <p>Sub Total</p>
        <p>Shipping Charges</p>
      </div>
      <div className="flex justify-between">
        <p>Total</p>
        <p className="font-bold text-5xl">$4563</p>
      </div>
    </div>
  );
};
