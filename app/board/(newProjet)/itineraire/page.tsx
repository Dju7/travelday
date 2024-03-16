'use client'
import dynamic from 'next/dynamic';
import { LatLng } from 'leaflet';
import { useState } from 'react';

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
        <div className='w-[40%] h-[740px] flex flex-col'>
          <div className="w-full h-[50%] flex flex-col justify-center items-center border border-blue-700 rounded-xl">
            <h3 className='text-3xl text-center'>Choix d'itinéraire</h3>

            <form onSubmit={handleSubmit} className="h-[90%] w-[95%] flex flex-col justify-center items-center gap-2">
              <label>Coordonnées</label>
              <div className="h-10 w-[90%] flex justify-center items-center border border-blue-700 bg-blue-200 rounded-xl">
                {newplace && (
                  <p className="text-lg ">{`Lat: ${newplace.lat.toFixed(6)} - Long: ${newplace.lng.toFixed(6)}`}</p>
                )}
              </div>
              <label>Lieu</label>
              <input onChange={(e) => setCity(e.target.value)} value={city} />
              <label>Description</label>
              <input onChange={(e) => setDescr(e.target.value)} value={descr} />
              <button type="submit" className="bg-gray-200 p-2 mt-4 border border-black">Ajouter marker</button>
            </form>
          </div>
          <div className="w-full h-[50%] flex flex-col gap-4">

          </div>
        </div>

      </div>
    </section>
  );
}