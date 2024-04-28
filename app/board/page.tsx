"use client";
import React, { useState, useEffect } from "react";
import CardTrip from "../components/card/CardTrip";
import Image from "next/image";
import Link from "next/link";

interface Tour {
  id: string;
  title: string;
  date: string;
  duration: string;
  itinerary: any[];
  author: string;
  authorId: string;
  utils: string[];
}

function page() {
  const [tourData, setTourData] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/tour/getTourAll"
        );
        const tour = await response.json();
        setTourData(tour);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log("donnée tourData", tourData);

  return (
    <section className="relative z-0 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 bg-blue-300 bg-opacity-30 border border-white gap-4 overflow-auto">
       {isLoading && (
      <div className="w-full h-full flex justify-center items-center text-white text-5xl">Loading...</div>
      )}
      <div className="absolute h-[800px] w-[800px] z-1 top-10 left-1/4">
      <Image
        src="/world.png"
        alt="dessin trajet"
        fill={true}
        className="object-contain opacity-40"
        
      />
      </div>
      {tourData.length > 0 ? (
        tourData.map((tourItem) => (
          <Link key={tourItem.id} href={`/board/${tourItem.id}`}>
            <CardTrip
              key={tourItem.id}
              title={tourItem.title}
              tourId={tourItem.id}
              date={tourItem.date}
              duration={tourItem.duration}
              docs={tourItem.utils}
            />
          </Link>
        ))
      ) : (
        ""
      )}
    </section>
  );
}

export default page;
