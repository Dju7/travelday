'use client'
import dynamic from 'next/dynamic';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { geoLocStore } from '@/store/geoloc';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import { Session } from 'next-auth';

const DynamicMap = dynamic(() => import('@/app/components/map/Map'), { ssr: false });

interface Marker {
  position: LatLng;
  step: string;
  city: string;
  description: string;
  booking: string
}

interface Props {
  session: Session | null;
}

export default function page({session}: Props) {
  const [Markers, setMarkers] = useState<Marker[]>([])
  const [newplace, setNewplace] = useState<LatLng | null>(null);
  const [step, setStep] = useState('')
  const [city, setCity] = useState('')
  const [descr, setDescr] = useState('')
  const [booking, setBooking] = useState('')
  const [date, setDate] = useState('')


  const newLocalisation = geoLocStore((state:any) =>state.geoloc)
  console.log(newLocalisation)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission
  
    if (newplace && city && descr) {
      // Create a new marker object with the entered data
      const newMarker = {
        step: step,
        position: newplace,
        city: city,
        description: descr,
        booking: booking, 
      };
      
      // Update the Markers state with the new marker
      setMarkers([...Markers, newMarker]);
  
      // Clear the input fields
      setCity('');
      setDescr('');
      setStep('');
      setBooking('')
    } else {
      // Handle case when any of the required fields are missing
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

  const handleTour = () => {
    const tourData = {
      title: newLocalisation.country,
      date: date,
      itinerary: Markers,
      author: session?.user.username
    }
    console.log(tourData)
  }
  
 
  return (
    <section className='bg-blue-100 bg-opacity-70 border-2 border-white'>
      <div className='p-2 flex justify-center items-center gap-4'>
        <div className='w-[60%] mt-5 ml-4 border-2 border-blue-700'>
          <DynamicMap markers={Markers}  geoloc={(newplace) => setNewplace(newplace)} />
        </div>
        <div className='w-[40%] h-[740px] flex flex-col gap-6'>
          <div className="w-full h-[70%] bg-blue-200 flex flex-col justify-center items-center border border-blue-500 rounded-xl">
            <h3 className='text-3xl text-center text-blue-500'>Choix d'itinéraire</h3>

            <form onSubmit={handleSubmit} className="h-[90%] w-[95%] flex flex-col justify-center items-center gap-2 text-blue-500">
              <div className="h-10 w-[90%] flex justify-center items-center border border-blue-700 bg-black rounded-xl mb-4">
                {newplace && (
                  <p className="text-lg ">{`Latitude: ${newplace.lat.toFixed(6)} - Longitude: ${newplace.lng.toFixed(6)}`}</p>
                )}
              </div>
              <div className='flex h-12 justify-center items-center gap-6'>
                <label>N°etape:</label>
                <input onChange={(e) => setStep(e.target.value)} value={step} className='w-8 h-8 bg-black p-2' />
                <label>Lieu:</label>
                <input onChange={(e) => setCity(e.target.value)} value={city} className='bg-black w-72 h-8 p-2' />
              </div>
              <label>Description</label>
              <input onChange={(e) => setDescr(e.target.value)} value={descr} className='bg-black w-[80%] h-8 p-2' />
              <label>Reservation</label>
              <input onChange={(e) => setBooking(e.target.value)} value={booking} className='bg-black w-[80%] h-8 p-2' />

              
              <button type="submit" className="bg-gray-200 p-2 mt-2 border border-black text-black">Ajouter marker</button>
            </form>
            <button className="bg-gray-200 p-2 border border-black text-black mb-2" onClick={handleLastDelete}>supprimer dernier</button>
          </div>
          <div className="w-full h-[35%] bg-blue-200 flex flex-col justify-center items-center border border-blue-500 rounded-xl gap-4">
          <h3 className='text-3xl text-center text-blue-500'>{newLocalisation.country}</h3>
          <div className=' w-[90%] h-14 flex justify-center items-center gap-4'>
          <p className='text-lg text-blue-3500'>Année:</p>
          <input className='w-[80%] h-8 bg-black p-2 text-center text-lg text-blue-500' value={date} onChange={(e) => setDate(e.target.value)} placeholder='ex: octobre - 2023' />
          </div>
          <button className="bg-gray-200 p-2 mt-4 border border-black text-black" onClick={handleTour}>Enregistrer l'itinéraire</button>
          <Link href="/board/documents"> next</Link>
          </div>  
        </div>

      </div>
    </section>
  );
}