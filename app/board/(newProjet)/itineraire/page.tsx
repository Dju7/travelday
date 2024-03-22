'use client'
import dynamic from 'next/dynamic';
import { LatLng } from 'leaflet';
import { useState } from 'react';
import { geoLocStore } from '@/store/geoloc';

const DynamicMap = dynamic(() => import('@/app/components/map/Map'), { ssr: false });

interface Marker {
  position: LatLng;
  city: string;
  description: string;
}

export default function page() {
  const [Markers, setMarkers] = useState<Marker[]>([])
  const [newplace, setNewplace] = useState<LatLng | null>(null);
  const [city, setCity] = useState('')
  const [descr, setDescr] = useState('')

  const newLocalisation = geoLocStore((state:any) =>state.geoloc)
  console.log(newLocalisation)

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent the default form submission
  
    if (newplace && city && descr) {
      // Create a new marker object with the entered data
      const newMarker = {
        position: newplace,
        city: city,
        description: descr
      };
      
      // Update the Markers state with the new marker
      setMarkers([...Markers, newMarker]);
  
      // Clear the input fields
      setCity('');
      setDescr('');
    } else {
      // Handle case when any of the required fields are missing
      console.log('Please fill in all the fields');
    }
  }
  

  return (
    <section>
      <div className='p-2 flex justify-center items-center gap-6'>
        <div className='w-[60%] mt-5 ml-4 border-2 border-blue-700'>
          <DynamicMap markers={Markers}  geoloc={(newplace) => setNewplace(newplace)} />
        </div>
        <div className='w-[40%] h-[740px] flex flex-col gap-4'>
          <div className="w-full h-[70%] flex flex-col justify-center items-center border border-cyan-300 rounded-xl">
            <h3 className='text-3xl text-center text-cyan-300'>Choix d'itinéraire</h3>

            <form onSubmit={handleSubmit} className="h-[90%] w-[95%] flex flex-col justify-center items-center gap-2 text-cyan-300">
              <div className="h-10 w-[90%] flex justify-center items-center border border-blue-700 bg-black rounded-xl mb-4">
                {newplace && (
                  <p className="text-lg ">{`Latitude: ${newplace.lat.toFixed(6)} - Longitude: ${newplace.lng.toFixed(6)}`}</p>
                )}
              </div>
              <div className='flex h-12 justify-center items-center gap-6'>
                <label>N°etape:</label>
                <input className='w-8 h-8 bg-black' />
                <label>Lieu:</label>
                <input onChange={(e) => setCity(e.target.value)} value={city} className='bg-black w-72 h-8' />
              </div>
              <label>Description</label>
              <input onChange={(e) => setDescr(e.target.value)} value={descr} className='bg-black w-[80%] h-8' />
              <label>Reservation</label>
              <input onChange={(e) => setCity(e.target.value)} value={city} className='bg-black w-[80%] h-8' />
              <div>

              </div>
              <button type="submit" className="bg-gray-200 p-2 mt-4 border border-black text-black">Ajouter marker</button>
            </form>
          </div>
          <div className="w-full h-[35%] flex flex-col justify-center items-center border border-cyan-300 rounded-xl gap-4">
          <h3 className='text-3xl text-center text-cyan-300'>{newLocalisation.country}</h3>
          <div className=' w-[90%] h-14 flex justify-center items-center gap-4'>
          <p className='text-lg text-cyan-300'>Année:</p>
          <input className='w-[80%] h-8 bg-black p-2 text-center text-lg text-cyan-300' placeholder='ex: octobre - 2023' />
          </div>
          <button className="bg-gray-200 p-2 mt-4 border border-black text-black">Enregistrer l'itinéraire</button>
          </div>
        </div>

      </div>
    </section>
  );
}