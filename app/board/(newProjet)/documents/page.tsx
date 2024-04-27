"use client";
import Rent from "@/app/components/location/Location";
import Lodgings from "@/app/components/lodgings/Lodgings";
import Transport from "@/app/components/transport/Transport";
import { TourIdStore } from "@/store/tourID";
import { utilsStore } from "@/store/utils";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const router = useRouter();
  const { tourId } = TourIdStore();
  const [booking, setBooking] = useState([]);
  const utils = utilsStore((state: any) => state.utils);

  useEffect(() => {
    const fetchItineraryData = async (tourId: String) => {
      try {
        const resp = await fetch(
          `http://localhost:3000/api/tour/getTour?tourId=${tourId}`
        );
        const data = await resp.json();
        const lodges = data.map((lodge: { booking: any }) => lodge.booking);
        setBooking(lodges);
      } catch (error) {
        console.error(error);
      }
    };
    if (tourId) {
      fetchItineraryData(tourId);
    }
  }, []);

  const handleClick = async () => {
    try {
      // Vérifie si toutes les données nécessaires sont disponibles
      if (!tourId || !utils.transport || !utils.booking || !utils.location) {
        throw new Error("Certaines données nécessaires sont manquantes.");
      }

      const utilsData = {
        tour: tourId,
        transport: utils.transport.transport,
        booking: utils.booking.booking,
        location: utils.location.location,
      };

      const resp = await fetch("http://localhost:3000/api/utils", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(utilsData),
      });

      if (!resp.ok) {
        throw new Error("La requête a échoué.");
      }

      alert("Voyage finalisé, retour au tableau de bord.");
      router.push("/board");
    } catch (error) {
      console.error("Erreur dans la requête :", error);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center bg-blue-300 bg-opacity-40 border-2 border-white gap-3 overflow-auto">
      <div className="h-6 w-full flex justify-center items-center">
        <h3 className="text-4xl text-[#fa9746]">INFORMATIONS UTILES</h3>
      </div>
      <div className="min-h-[350px] w-[98%] flex flex-col lg:flex-row items-center gap-4">
        <Transport />
        <Rent />
      </div>
      <div className="w-[98%] min-h-[350px]">
        <Lodgings lodges={booking} />
      </div>
      <div className="h-[8%] w-[98%]  flex justify-between items-center">
        <p className="text-[#fa9746] font-bold text-2xl">
          Budget minimal: XXXX €
        </p>
        <button
          onClick={handleClick}
          className="h-10 w-[10%] bg-gray-200 text-black"
        >
          Créer voyage
        </button>
      </div>
    </section>
  );
}
