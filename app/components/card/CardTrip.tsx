'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PiFileDocDuotone } from "react-icons/pi";


export default function CardTrip({title, date, duration, docs}: any) {
  const [image, setImage] = useState('')
  
  useEffect(() => {
    const getCountries = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/countries?country=${title}`);
        if (!resp.ok) {
          throw new Error('Récupération de données impossible, vérifiez que ce pays existe');
        }
        const data = await resp.json();
        setImage(data.urlImage);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, [title]);

 
  return (
    <article className="z-20 h-[390px] w-[350px] shadow-xl  flex flex-col bg-gradient-to-t from-blue-100 to-blue-300 rounded-xl shadow-lg shadow-blue-800 transform transition hover:scale-105 ">
      <div className="h-[45%] w-full flex justify-center items-center">
        <div className="relative  h-full w-full rounded-xl">
          <Image src={image} alt="palmier" fill object-fit='contain' className="absolute rounded-tl-xl rounded-tr-xl mb-2"/>
        </div>
      </div>
      <div className=" h-[40%] w-full flex flex-col justify-start items-start gap-2 text-blue-800 p-2">
        <h2 className="text-4xl">{title}</h2>
        <p className="text-xl ">{date}</p>
        <p className="text-xl ">{duration}</p>
      </div>
      <div className="relative z-1 mt-4 h-12 flex justify-end items-center p-2">
        {
          docs.length === 0 ? <PiFileDocDuotone className=" cursor-pointer text-4xl text-red-500"/> : ''
        }
      </div>
      
    </article>
  );
}