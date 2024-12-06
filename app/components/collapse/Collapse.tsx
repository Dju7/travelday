import React, { useState } from 'react';

export default function Collapse({ title, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 w-[97%] flex flex-col justify-center items-center ">
      <div
        className="w-full text-center text-blue-800 bg-blue-100 text-2xl font-bold rounded-xl p-2 cursor-pointer hover:text-red-400 shadow-lg shadow-blue-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{title}</p>
      </div>
      <div
        className={`overflow-hidden grid grid-rows-[0fr] bg-blue-300 pl-2  w-[97%] ${
            isOpen ? "grid-rows-[1fr] ease-in-out duration-300 " : "grid-rows-[0fr] ease-in-out duration-300"
          }`}
      >
        <div className=" overflow-hidden text-blue-800">
          {children}
        </div>
      </div>
    </div>
  );
}