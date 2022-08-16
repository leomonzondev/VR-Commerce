import React from "react";

export const CardProduct = ({ children, title }: any) => {
  return (
    <div className="w-[40rem] flex justify-center items-center h-[40rem] outline outline-white outline-3 rounded-lg bg-gradient-to-br  hover:from-[#6e8bef] hover:to-[#ca6eff] flex-col ">
      <div className="flex  flex-col items-center h-full">
        <div className="flex items-center h-1/2  pt-40">{children}</div>
        <div className=" h-1/2 flex items-end pb-20">
          <h1 className="text-white  font-medium text-3xl px-20 text-center ">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};
