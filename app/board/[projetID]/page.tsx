'use client'
import React, { useEffect, useState } from "react";
import { TourIdStore } from "@/store/tourID";
import {useRouter} from 'next/navigation';
import { PiFileDocDuotone } from "react-icons/pi";
import Collapse from "@/app/components/collapse/Collapse";

interface pageProps {
  params: { projetID: string };
}

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

export default function page({ params }: pageProps) {
  const [tourData, setTourData] = useState<Tour | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter()
  const tourIdState = TourIdStore(state => state);
  const updateTourId = tourIdState.updateTourId

  const handleCompleteDocs = () => {
    updateTourId(params.projetID)
    router.push('/board/documents')
  }

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
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataTour();
  }, [params.projetID]);

  console.log(tourData)


  return (
    <section className="bg-blue-300 bg-opacity-40 border-2 border-white flex justify-center items-center gap-2 p-4">
    {isLoading && (
      <div className="text-white text-3xl">Récupération des données...</div>
    )}
    {!isLoading && tourData && (
      <>
        <div className="w-[55%] min-h-[88vh] flex flex-col gap-2 ">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-white text-6xl font-bold">{tourData.title}</h2>
            <button className="mr-4 text-white bg-yellow-400 text-3xl font-bold rounded-xl p-2 hover:bg-red-400 shadow-xl shadow-blue-800">X</button>
          </div>
          <div className="w-[99%] p-2 flex justify-between items-center border-b border-yellow-400">
            <p className=" text-white text-3xl">{tourData.date}</p>
            <p className=" text-white text-3xl">{tourData.duration}</p>
          </div>
          <div className="w-[99%] p-1 flex justify-between items-center ">
            <p className="text-xl font-bold text-white p-2 rounded-xl bg-green-400 hover:bg-emerald-400 cursor-pointer shadow-xl shadow-blue-800">Voir l'itinéraire</p>
             {
               tourData.utils.length === 0 ? <div className="group flex justify-center items-center gap-2"><p className="text-white hidden group-hover:block">Ajouter informations</p> <PiFileDocDuotone className=" cursor-pointer text-5xl text-yellow-400 hover:" onClick={handleCompleteDocs}/></div> : ''
             } 
          </div>

          <Collapse title='Moyen de Transport'>
            ceci et cela
          </Collapse>
          <Collapse title='Location(s) de véhicule(s)'>
            ceci et cela
            <br/>
            <p className="mt-8">et aussi ceci</p>
          </Collapse>

          <div className="mt-8 h-40 w-full flex justify-center items-center gap-4">
          <div className="w-[50%] text-blue-800 h-full bg-blue-100 flex flex-col justify-center items-center rounded-xl shadow-xl shadow-blue-800">
            <p className="text-2xl">Budget minimale</p>
            <p className="text-sm">frais-fixe</p>
            <p className="mt-10 text-xl">XXX €</p>


          </div>
          <div className="w-[50%] h-full text-blue-800 bg-blue-100 flex flex-col justify-center items-center rounded-xl shadow-xl shadow-blue-800">
            <p className="text-2xl">Bilan carbone</p>
            <p className="text-sm">Approximatif</p>
            <p className="mt-10 text-xl">XXX C</p>
          </div>
        </div>

        </div>

        <div className="w-[45%] min-h-[88vh] flex flex-col items-center overflow-auto">
          <p className=" w-[90%] mt-[2px] text-center text-white bg-purple-400 text-3xl font-bold rounded-xl p-2 shadow-xl shadow-blue-800">Etapes et Hebergements</p>
        </div>
        
      </>
    )}
  </section>
  );
}