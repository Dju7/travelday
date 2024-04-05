import React from "react";
import Image from "next/image";


export default function CardTrip({title, date, duration}: any) {
  return (
    <article className=" h-[370px] w-[350px] border border-white p-2 flex flex-col bg-gradient-to-t from-cyan-500 to-blue-500 rounded-xl transform transition hover:scale-105 ">
      <div className=" h-[40%] w-full flex flex-col justify-center items-center gap-2 text-white">
        <h2 className="text-3xl">{title}</h2>
        <p className="text-xl ">{date}</p>
        <p className="text-xl ">{duration}</p>
      </div>
      <div className="h-[60%] w-full flex justify-center items-center">
        <div className="relative  h-[95%] w-[95%] rounded-xl">
          <Image src="/banniere.jpg" alt="palmier" fill object-fit='contain' className="absolute rounded-xl"/>
        </div>

      </div>
    </article>
  );
}