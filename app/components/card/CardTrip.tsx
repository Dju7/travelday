import React from "react";
import Image from "next/image";
import { PiFileDocDuotone } from "react-icons/pi";
import { TourIdStore } from "@/store/tourID";





export default function CardTrip({title, tourId, date, duration, docs}: any) {
  const tourIdState = TourIdStore(state => state);
  const updateTourId = tourIdState.updateTourId

  const handleClick = () => {
    updateTourId(tourId)
  }
  
  return (
    <article className="z-20 h-[350px] w-[320px] border border-blue-800  shadow-xl  flex flex-col bg-gradient-to-t from-[#2b468b] to-blue-500 rounded-xl transform transition hover:scale-105 ">
      <div className="h-[45%] w-full flex justify-center items-center">
        <div className="relative  h-full w-full rounded-xl">
          <Image src='/banniere.jpg' alt="palmier" fill object-fit='contain' className="absolute rounded-tl-xl rounded-tr-xl"/>
        </div>
      </div>
      <div className=" h-[40%] w-full flex flex-col justify-start items-start gap-2 text-blue-100 p-2">
        <h2 className="text-4xl text-white">{title}</h2>
        <p className="text-xl ">{date}</p>
        <p className="text-xl ">{duration}</p>
      </div>
      <div className=" mt-4 h-12 flex justify-end items-center p-2">
        {
          docs.length === 0 ? <PiFileDocDuotone className=" cursor-pointer text-4xl text-blue-100 hover:text-red-400" onClick={handleClick}/> : ''
        }
      </div>
      
    </article>
  );
}