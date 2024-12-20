'use client'
import dynamic from 'next/dynamic';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { geoLocStore } from '@/store/geoloc';
import { TourIdStore } from '@/store/tourID';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';

const DynamicMap = dynamic(() => import('@/app/components/map/Map'), { ssr: false });

interface Marker {
  position: LatLng;
  step: string;
  city: string;
  description: string;
  booking: string
}

export default function page() {
  const [Markers, setMarkers] = useState<Marker[]>([])
  const [newplace, setNewplace] = useState<LatLng | null>(null);
  const [step, setStep] = useState('')
  const [city, setCity] = useState('')
  const [descr, setDescr] = useState('')
  const [booking, setBooking] = useState('')
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('')

  const { data: session, status } = useSession()
  const router = useRouter()
  const newLocalisation = geoLocStore((state:any) =>state.geoloc)
  const tourIdState = TourIdStore(state => state);
  const updateTourId = tourIdState.updateTourId
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission
  
    if (newplace && city && descr && step) {
      // Create a new marker object with the entered data
      const newMarker = {
        step: step,
        position: newplace,
        city: city,
        description: descr,
        booking: booking || "même hebergement", 
      };
      
      // Update the Markers state with the new marker
      setMarkers([...Markers, newMarker]);
  
      // Clear the input fields
      setCity('');
      setDescr('');
      setStep('');
      setBooking('')
    } else {
      alert('SVP remplissez tout les champs');
    }
  }

  const handleLastDelete = () => {
    const updatedMarkers = [...Markers];
    if(Markers.length <= 0) {
      alert('aucun marker')
    }
    updatedMarkers.pop();
    setMarkers(updatedMarkers);
  }

  const handleTour = async () => {
    const tourData = {
      title: newLocalisation.country,
      date: date,
      itinerary: Markers,
      duration: duration,
      author: session?.user.username
    }
    
    try {
      const resp = await fetch('http://localhost:3000/api/tour', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(tourData),
      });

      // Récupérer l'ID du tour de la réponse HTTP
      if (resp.status === 201) {
        const responseData = await resp.json();
        updateTourId( responseData.tourID)
      }      

      alert('itinéraire enregistré')
      router.push('/board/documents');

    } catch(error) {
       console.error('erreur dans la requête', error)
    }
  }
  
  return (
    <section className='bg-blue-300 bg-opacity-70 border-2 border-white'>
      <div className='p-2 flex flex-col lg:flex-row justify-center items-center gap-4'>

        {/* BLOC MAP */}
        <div className='w-full lg:w-[60%] mt-5 ml-4 border-2 border-blue-700'>
          <DynamicMap markers={Markers}  geoloc={(newplace) => setNewplace(newplace)} />
        </div>

        {/*BLOC DATA */}
        <div className='w-full lg:w-[40%] h-[750px] flex flex-col mt-4 gap-6'>
          <div className="w-full h-[75%] bg-gradient-to-b from-blue-200 to-blue-300 flex flex-col justify-center items-center border border-blue-800 rounded-xl">
            <h3 className='text-3xl text-center text-blue-800'>Choix d'itinéraire</h3>
            <form onSubmit={handleSubmit} className="h-[90%] w-[95%] flex flex-col justify-center items-center gap-2 text-blue-700">
              <div className="h-10 w-[85%] flex justify-center items-center border border-blue-500  bg-gray-200 mb-4">
                {newplace && (
                  <p className="text-lg ">{`Latitude: ${newplace.lat.toFixed(6)} - Longitude: ${newplace.lng.toFixed(6)}`}</p>
                )}
              </div>
              <div className='flex h-12 justify-center items-center gap-6 w-[80%]'>
                <label>N°etape:</label>
                <input onChange={(e) => setStep(e.target.value)} value={step} className='w-8 h-8 border border-blue-500  bg-gray-200 p-2' />
                <label>Lieu:</label>
                <input onChange={(e) => setCity(e.target.value)} value={city} className='border border-blue-500  bg-gray-200 w-[90%] h-8 p-2' />
              </div>
              <label>Description</label>
              <input onChange={(e) => setDescr(e.target.value)} value={descr} className='border border-blue-500  bg-gray-200 w-[80%] h-8 p-2' />
              Trouver un hebergement :
              <div className='flex justify-between items-center w-[80%] h-16 gap-4'>
                <p>
                <a href={`https://www.booking.com/${city}`} target="_blank" className=' bg-white p-2 font-bold shadow-lg shadow-blue-500 hover:bg-blue-800 hover:text-white'>Booking.com</a>
                </p>
                <p>
                  <a href={`https://www.airbnb.fr/a/stays/${city}`} target='_blank' className=' bg-white p-2 font-bold shadow-lg shadow-blue-500 hover:bg-blue-800 hover:text-white'>AirBnB</a>
                </p>
                <p>
                <a href={`https://www.hometogo.fr/${city}`} target='_blank' className=' bg-white p-2 font-bold shadow-lg shadow-blue-500 hover:bg-blue-800 hover:text-white'>HomeToGo</a>
                </p>
              </div>
              <label>Nom de l'hotel ou de la Reservation:</label>
              <input onChange={(e) => setBooking(e.target.value)} value={booking} className='border border-blue-500  bg-gray-200 w-[80%] h-8 p-2' /> 
              <div className='flex justify-between items-center w-[80%]'>
              <button type="submit" className="bg-blue-800 p-2 mt-4 text-white shadow-lg shadow-blue-500 hover:bg-green-400">Ajouter marker</button>
              <p className=" mt-4 bg-blue-800 p-2 mt-4 text-white shadow-lg shadow-blue-500 hover:bg-red-400 mb-2" onClick={handleLastDelete}>supprimer dernier</p>
              </div>
            </form>
           
          </div>

          <div className="w-full h-[25%] bg-gradient-to-b from-blue-200 to-blue-300 flex flex-col justify-center items-center border border-blue-500 rounded-xl gap-4"> 
            <h3 className='text-3xl text-center text-blue-800'>{newLocalisation.country}</h3> 
            <div className=' w-[90%] h-14 flex justify-center items-center gap-4'>
              <p className='text-lg text-blue-3500'>Année:</p>
              <input className='w-[80%] h-8 border border-blue-500  bg-gray-200 p-2 text-center text-lg text-blue-500' value={date} onChange={(e) => setDate(e.target.value)} placeholder='ex: octobre - 2023' />
              <p className='text-lg text-blue-3500'>durée:</p>
              <input className='w-[80%] h-8 border border-blue-500  bg-gray-200 p-2 text-center text-lg text-blue-500' value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='ex: 23 jours' />
              </div>
              <button className="p-2 mb-2 bg-blue-800 text-white shadow-lg shadow-blue-500 hover:bg-purple-400" onClick={handleTour}>Enregistrer l'itinéraire</button>        
            </div>            
        </div>
        <Link href="/board/documents"> next</Link>

      </div>
    </section>
  );
}