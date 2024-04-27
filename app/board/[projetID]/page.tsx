"use client";
import React, { useEffect, useState } from "react";

interface pageProps {
  params: { projetID: string };
}

export default function page({ params }: pageProps) {
  const [tourData, setTourData] = useState<string>("");

  useEffect(() => {
    async function fetchDataTour() {
      try {
        const response = await fetch(
          `http://localhost:3000/api/tour/getTourUnique?tourId=${params.projetID}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTourData(data);
      } catch (error) {
        console.error("Error fetching itinerary:", error);
      }
    }

    fetchDataTour();
  }, [params.projetID]);

  return (
    <section className="bg-blue-300 bg-opacity-40 border-2 border-white flex justify-center items-center">
      <h1>Page du voyage N°{params.projetID}</h1>
    </section>
  );
}
