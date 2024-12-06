'use client'
import React, { useEffect, useState } from "react";
import { TourIdStore } from "@/store/tourID";
import {useRouter} from 'next/navigation';
import { PiFileDocDuotone } from "react-icons/pi";
import Collapse from "@/app/components/collapse/Collapse";
import DisplayBooking from "@/app/components/displayBooking/DisplayBooking";

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
  utils: TourUtils[];
}

interface TourUtils {
  transport: Transport[];
  location: Location[];
  booking: Booking[];
}
interface Transport {
  transportation: string;
  departure: string;
  departureHours: string;
  arrival: string;
  arrivalHours: string;
  transportReservation: string;
  transportPrice: string;
}

interface Location {
  vehicule: string;
  modele: string;
  vehiculePrice: string;
}
interface Booking extends Array<Booking> {
  nights: string;
  lodgeName: string;
  lodgeReservation: string;
  lodgePrice: string
}

export default function page({ params }: pageProps) {
  const [tourData, setTourData] = useState<Tour | null>(null);
  const [transportData, setTransportData] = useState<Transport | null>(null);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter()
  const tourIdState = TourIdStore(state => state);
  const updateTourId = tourIdState.updateTourId

  const handleCompleteDocs = () => {
    updateTourId(params.projetID)
    router.push('/board/documents')
  }

  const handleDeleteTour = async () => {
    const confirmDelete = window.confirm("êtes vous sûr de vouloir supprimer cette route?");
    if (!confirmDelete) {
        return; // demande de confirmation suppression
    }

    try {
      const response = await fetch(`http://localhost:3000/api/tour/deleteTour?tourId=${params.projetID}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        // Tour supprimer, redirection page board
        router.push('/board'); 
      } else {
        // suppression erreur
        const data = await response.json();
        console.error('Error deleting tour:', data.error);
       
      }
    } catch (error) {
      console.error('Error deleting tour');
    }
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

      {/*récupération informations de transport */}
        const transportData = await data.utils[0].transport
        const parseTransportData = JSON.parse(transportData)
        setTransportData(parseTransportData)

      {/*Récupération informations de booking */}
       const bookingData = await data.utils[0].booking
       setBooking(bookingData)


      } catch (error) {
        console.error("Error fetching itinerary:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchDataTour();
  }, [params.projetID]);

  console.log(tourData)
 
 const handleMap = () => {
  router.push(`/board/travelmap?tourId=${params.projetID}`)
 }

  return (
    <section className="bg-blue-300 bg-opacity-40 border-2 border-white flex max-lg:flex-col justify-center items-center gap-2 p-4">
    {isLoading && (
      <div className="text-white text-3xl">Récupération des données...</div>
    )}
    {!isLoading && tourData && (
      <>
        <div className="w-[90%] lg:w-[55%] h-[88vh] flex flex-col gap-2 overflow-auto mb-6 lg:mb-0 ">
          <div className="w-full flex justify-between items-center">
            <h2 className="text-white text-6xl font-bold">{tourData.title}</h2>
            <button className="mr-4 text-white bg-yellow-400 text-3xl font-bold rounded-xl p-2 hover:bg-red-400 shadow-xl shadow-blue-800" onClick={handleDeleteTour}>X</button>
          </div>
          <div className="w-[99%] p-2 flex justify-between items-center border-b border-yellow-400">
            <p className=" text-white text-3xl">{tourData.date}</p>
            <p className=" text-white text-3xl">{tourData.duration}</p>
          </div>
          <div className="w-[99%] p-1 flex justify-between items-center ">
            <p className="text-xl font-bold text-white p-2 rounded-xl bg-green-400 hover:bg-emerald-400 cursor-pointer shadow-xl shadow-blue-800" onClick={handleMap}>Voir l'itinéraire</p>
             {
               tourData.utils.length === 0 ? <div className="group flex justify-center items-center gap-2"><p className="text-white hidden group-hover:block">Ajouter informations</p> <PiFileDocDuotone className=" cursor-pointer text-5xl text-yellow-400 hover:" onClick={handleCompleteDocs}/></div> : ''
             } 
          </div>

          <Collapse title='Moyen de Transport'>
            <div className="w-full p-4 flex justify-between">
            <p>Mode: {transportData?.transportation}</p>
            <p className=" text-2xl font-bold">{transportData?.transportReservation}</p>
            </div>
            <div className="w-full p-4 flex justify-between">
            <p>Départ: {transportData?.departure}</p>
            <p>Arrivée: {transportData?.arrival}</p>
            </div>
            <div className="w-full p-4 flex justify-between">
            <p> {transportData?.departureHours}</p>
            <p>{transportData?.arrivalHours}</p>
            </div>
            <div className="w-full p-4 flex justify-end">
            <p className="font-bold"> {transportData?.transportPrice} €</p>
            </div>
            
          </Collapse>
          <Collapse title='Location(s) de véhicule(s)'>
            <div>
            {
              tourData.utils.length ===  0 || tourData.utils[0]?.location.length === 0 ? <p className="w-full text-center text-2xl p-4">Pas de location</p> 
              : 
              <>
              <p>Véhicule: {tourData.utils[0].location[0].vehicule}</p> 
              <p>Modèle: {tourData.utils[0].location[0].modele} </p>
              <p>prix: {tourData.utils[0].location[0].vehiculePrice} € </p>
              </>
            }
            </div>
          </Collapse>

          <div className="mt-8 h-40 w-[97%] flex justify-center items-center gap-4">
            <div className="w-[50%] text-blue-800 h-full bg-blue-100 flex flex-col justify-center items-center rounded-xl shadow-xl shadow-blue-800">
              <p className="text-2xl">Budget minimale</p>
              <p className="text-sm">frais-fixe</p>
              <p className="mt-10 text-xl">XXX €</p>


            </div>
            <div className="w-[50%] h-full text-blue-800 bg-blue-100 flex flex-col justify-center items-center rounded-xl shadow-xl shadow-blue-800">
              <p className="text-2xl">Enpreinte carbone</p>
              <p className="text-sm">kg CO2eq</p>
              <p className="mt-10 text-xl">XXX C</p>
            </div>
          </div>

        </div>

        <div className="w-[45%] min-h-[88vh] flex flex-col items-center overflow-auto">
          <p className=" w-[90%] mt-[2px] text-center text-white bg-blue-400 text-3xl font-bold rounded-xl p-2 shadow-lg shadow-blue-800">Etapes et Hebergements</p>
          <div className="w-[80%] flex flex-col gap-4 mt-10 justify-center">
            {booking?.map((lodge, index) => (
              <DisplayBooking key={index} night={lodge.nights} step={tourData.itinerary[index].step} price={lodge.lodgePrice} reservation={lodge.lodgeReservation} name={lodge.lodgeName} />
           ))}
          </div>
        </div>
        
      </>
    )}
  </section>
  );
}